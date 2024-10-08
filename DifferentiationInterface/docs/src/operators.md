# Operators

DifferentiationInterface.jl is based on two concepts: **operators** and **backends**.
This page is about the former, check out [that page](@ref "Backends") to learn about the latter.

## List of operators

Given a function `f(x) = y`, there are several differentiation operators available. The terminology depends on:

- the type and shape of the input `x`
- the type and shape of the output `y`
- the order of differentiation

Below we list and describe all the operators we support.

!!! tip
    Read the book [The Elements of Differentiable Programming](https://arxiv.org/abs/2403.14606) for details on these concepts.

### High-level operators

These operators are computed using only the input `x`.

| operator                    | order | input  `x`      | output   `y`                | operator result type | operator result shape    |
| :-------------------------- | :---- | :-------------- | :-------------------------- | :------------------- | :----------------------- |
| [`derivative`](@ref)        | 1     | `Number`        | `Number` or `AbstractArray` | same as `y`          | `size(y)`                |
| [`second_derivative`](@ref) | 2     | `Number`        | `Number` or `AbstractArray` | same as `y`          | `size(y)`                |
| [`gradient`](@ref)          | 1     | `AbstractArray` | `Number`                    | same as `x`          | `size(x)`                |
| [`jacobian`](@ref)          | 1     | `AbstractArray` | `AbstractArray`             | `AbstractMatrix`     | `(length(y), length(x))` |
| [`hessian`](@ref)           | 2     | `AbstractArray` | `Number`                    | `AbstractMatrix`     | `(length(x), length(x))` |

### Low-level operators

These operators are computed using the input `x` and a tangent `t` of type [`Tangents`](@ref).
This tangent is essentially an `NTuple`, whose elements live either

- in the same space as `x` (we call it `tx`)
- or in the same space as `y` (we call it `ty`)

| operator                    | order | input  `x`      | output   `y` | tangent `t` | operator result type | operator result shape |
| :-------------------------- | :---- | :-------------- | :----------- | :---------- | :------------------- | :-------------------- |
| [`pushforward`](@ref) (JVP) | 1     | `Any`           | `Any`        | `tx`        | same as `y`          | `size(y)`             |
| [`pullback`](@ref) (VJP)    | 1     | `Any`           | `Any`        | `ty`        | same as `x`          | `size(x)`             |
| [`hvp`](@ref)               | 2     | `AbstractArray` | `Number`     | `tx`        | same as `x`          | `size(x)`             |

## Variants

Several variants of each operator are defined:

- out-of-place operators return a new derivative object
- in-place operators mutate the provided derivative object

| out-of-place                | in-place                     | out-of-place + primal                            | in-place + primal                                 |
| :-------------------------- | :--------------------------- | :----------------------------------------------- | :------------------------------------------------ |
| [`derivative`](@ref)        | [`derivative!`](@ref)        | [`value_and_derivative`](@ref)                   | [`value_and_derivative!`](@ref)                   |
| [`second_derivative`](@ref) | [`second_derivative!`](@ref) | [`value_derivative_and_second_derivative`](@ref) | [`value_derivative_and_second_derivative!`](@ref) |
| [`gradient`](@ref)          | [`gradient!`](@ref)          | [`value_and_gradient`](@ref)                     | [`value_and_gradient!`](@ref)                     |
| [`hessian`](@ref)           | [`hessian!`](@ref)           | [`value_gradient_and_hessian`](@ref)             | [`value_gradient_and_hessian!`](@ref)             |
| [`jacobian`](@ref)          | [`jacobian!`](@ref)          | [`value_and_jacobian`](@ref)                     | [`value_and_jacobian!`](@ref)                     |
| [`pushforward`](@ref)       | [`pushforward!`](@ref)       | [`value_and_pushforward`](@ref)                  | [`value_and_pushforward!`](@ref)                  |
| [`pullback`](@ref)          | [`pullback!`](@ref)          | [`value_and_pullback`](@ref)                     | [`value_and_pullback!`](@ref)                     |
| [`hvp`](@ref)               | [`hvp!`](@ref)               | NA                                               | NA                                                |

## Mutation and signatures

Two kinds of functions are supported:

- out-of-place functions `f(x) = y`
- in-place functions `f!(y, x) = nothing`

!!! warning
    In-place functions only work with [`pushforward`](@ref), [`pullback`](@ref), [`derivative`](@ref) and [`jacobian`](@ref).

This results in various operator signatures (the necessary arguments and their order):

| function signature    | out-of-place operator        | in-place  operator                    |
| :-------------------- | :--------------------------- | :------------------------------------ |
| out-of-place function | `op(f, backend, x, [t])`     | `op!(f, result, backend, x, [t])`     |
| in-place function     | `op(f!, y, backend, x, [t])` | `op!(f!, y, result, backend, x, [t])` |

!!! warning
    The positional arguments between `f`/`f!` and `backend` are always mutated.
    This convention holds regardless of the bang `!` in the operator name.
    In particular, for in-place functions `f!(y, x)`, every variant of every operator will mutate `y`.

## Preparation

### Principle

In many cases, AD can be accelerated if the function has been called at least once (e.g. to record a tape) or if some cache objects are provided.
This preparation procedure is backend-specific, but we expose a common syntax to achieve it.

| operator            | preparation (different point)       | preparation (same point)                 |
| :------------------ | :---------------------------------- | :--------------------------------------- |
| `derivative`        | [`prepare_derivative`](@ref)        | -                                        |
| `gradient`          | [`prepare_gradient`](@ref)          | -                                        |
| `jacobian`          | [`prepare_jacobian`](@ref)          | -                                        |
| `second_derivative` | [`prepare_second_derivative`](@ref) | -                                        |
| `hessian`           | [`prepare_hessian`](@ref)           | -                                        |
| `pushforward`       | [`prepare_pushforward`](@ref)       | [`prepare_pushforward_same_point`](@ref) |
| `pullback`          | [`prepare_pullback`](@ref)          | [`prepare_pullback_same_point`](@ref)    |
| `hvp`               | [`prepare_hvp`](@ref)               | [`prepare_hvp_same_point`](@ref)         |

In addition, the preparation syntax depends on the number of arguments accepted by the function.

| function signature    | preparation signature                |
| :-------------------- | :----------------------------------- |
| out-of-place function | `prepare_op(f, backend, x, [t])`     |
| in-place function     | `prepare_op(f!, y, backend, x, [t])` |

Preparation creates an object called `extras` which contains the the necessary information to speed up an operator and its variants.
The idea is that you prepare only once, which can be costly, but then call the operator several times while reusing the same `extras`.

```julia
op(f, backend, x, [t])  # slow because it includes preparation
op(f, extras, backend, x, [t])  # fast because it skips preparation
```

!!! warning
    The `extras` object is always mutated, regardless of the bang `!` in the operator name.

### Reusing preparation

Deciding whether it is safe to reuse the results of preparation is not easy.
Here are the general rules that we strive to implement:

|                           | different point                          | same point                               |
| :------------------------ | :--------------------------------------- | :--------------------------------------- |
| the output `extras` of... | `prepare_op(f, b, x)`                    | `prepare_op_same_point(f, b, x, t)`      |
| can be used in...         | `op(f, extras, b, other_x)`              | `op(f, extras, b, x, other_t)`           |
| provided that...          | `other_x` has same type and shape as `x` | `other_t` has same type and shape as `t` |

These rules hold for the majority of backends, but there are some exceptions: see [this page](@ref "Preparation") to know more.

## Second order

For second-order operators, there are two options: use a single backend or combine two of them within the [`SecondOrder`](@ref) struct.

### Single backend

Some backends natively support a set of second-order operators (typically only the [`hessian`](@ref)).
In that case, it can be advantageous to use the backend on its own.
If the operator is not supported natively, we will fall back on `SecondOrder(backend, backend)` (see below).

### Combining backends

In general, you can use [`SecondOrder`](@ref) to combine different backends.

```julia
backend = SecondOrder(outer_backend, inner_backend)
```

The inner backend will be called first, and the outer backend will differentiate the generated code.

There are many possible backend combinations, a lot of which will fail.
Usually, the most efficient approach for Hessians is forward-over-reverse, i.e. a forward-mode outer backend and a reverse-mode inner backend.

!!! danger
    `SecondOrder` backends do not support first-order operators.

## Sparsity

When computing sparse Jacobians or Hessians (with a lot of zeros in the matrix), it is possible to take advantage of their sparsity pattern to speed things up.
For this to work, three ingredients are needed (read [this survey](https://epubs.siam.org/doi/10.1137/S0036144504444711) to understand why):

1. An underlying (dense) backend
2. A sparsity pattern detector like:
   - [`TracerSparsityDetector`](@extref SparseConnectivityTracer.TracerSparsityDetector) from [SparseConnectivityTracer.jl](https://github.com/adrhill/SparseConnectivityTracer.jl)
   - [`SymbolicsSparsityDetector`](@extref Symbolics.SymbolicsSparsityDetector) from [Symbolics.jl](https://github.com/JuliaSymbolics/Symbolics.jl)
   - [`DenseSparsityDetector`](@ref) from DifferentiationInterface.jl (beware that this detector only gives a locally valid pattern)
3. A coloring algorithm: [`GreedyColoringAlgorithm`](@extref SparseMatrixColorings.GreedyColoringAlgorithm) from [SparseMatrixColorings.jl](https://github.com/gdalle/SparseMatrixColorings.jl) is the only one we support.

!!! warning
    Generic sparse AD is now located in a package extension which depends on SparseMatrixColorings.jl.

These ingredients can be combined within the [`AutoSparse`](@extref ADTypes.AutoSparse) wrapper, which DifferentiationInterface.jl re-exports.
`AutoSparse` backends only support operators [`jacobian`](@ref) and [`hessian`](@ref) (as well as their variants).
Note that for sparse Hessians, you need to put the `SecondOrder` backend inside `AutoSparse`, and not the other way around.

The preparation step of `jacobian` or `hessian` with an `AutoSparse` backend can be long, because it needs to detect the sparsity pattern and color the resulting sparse matrix.
But after preparation, the more zeros are present in the matrix, the greater the speedup will be compared to dense differentiation.

!!! danger
    The result of preparation for an `AutoSparse` backend cannot be reused if the sparsity pattern changes.

!!! info
    Symbolic backends have built-in sparsity handling, so `AutoSparse(AutoSymbolics())` and `AutoSparse(AutoFastDifferentiation())` do not need additional configuration for pattern detection or coloring.
    However they still benefit from preparation.

## Going further

### Non-standard types

The package is thoroughly tested with inputs and outputs of the following types: `Float64`, `Vector{Float64}` and `Matrix{Float64}`.
We also expect it to work on most kinds of `Number` and `AbstractArray` variables.
Beyond that, you are in uncharted territory.
We voluntarily keep the type annotations minimal, so that passing more complex objects or custom structs _might work with some backends_, but we make no guarantees about that.

### Multiple inputs/outputs

Restricting the API to one input and one output has many coding advantages, but it is not very flexible.
If you need more than that, try using [ComponentArrays.jl](https://github.com/jonniedie/ComponentArrays.jl) to wrap several objects inside a single `ComponentVector`.
