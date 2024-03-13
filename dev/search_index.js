var documenterSearchIndex = {"docs":
[{"location":"api/","page":"API reference","title":"API reference","text":"CurrentModule = DifferentiationInterface\nCollapsedDocStrings = true","category":"page"},{"location":"api/#API-reference","page":"API reference","title":"API reference","text":"","category":"section"},{"location":"api/","page":"API reference","title":"API reference","text":"DifferentiationInterface","category":"page"},{"location":"api/#DifferentiationInterface.DifferentiationInterface","page":"API reference","title":"DifferentiationInterface.DifferentiationInterface","text":"DifferentiationInterface\n\nAn interface to various automatic differentiation backends in Julia.\n\nExports\n\nderivative\ngradient\ngradient!\njacobian\njacobian!\nmultiderivative\nmultiderivative!\nprepare_derivative\nprepare_gradient\nprepare_jacobian\nprepare_multiderivative\nprepare_pullback\nprepare_pushforward\npullback\npullback!\npushforward\npushforward!\nvalue_and_derivative\nvalue_and_gradient\nvalue_and_gradient!\nvalue_and_jacobian\nvalue_and_jacobian!\nvalue_and_multiderivative\nvalue_and_multiderivative!\nvalue_and_pullback\nvalue_and_pullback!\nvalue_and_pushforward\nvalue_and_pushforward!\n\n\n\n\n\n","category":"module"},{"location":"api/#Derivative","page":"API reference","title":"Derivative","text":"","category":"section"},{"location":"api/","page":"API reference","title":"API reference","text":"Modules = [DifferentiationInterface]\nPages = [\"src/derivative.jl\"]","category":"page"},{"location":"api/#DifferentiationInterface.derivative-Tuple{ADTypes.AbstractADType, Any, Number, Any, DifferentiationInterface.ForwardMode}","page":"API reference","title":"DifferentiationInterface.derivative","text":"derivative(backend, f, x, [extras]) -> der\n\nCompute the derivative der = f'(x) of a scalar-to-scalar function.\n\n\n\n\n\n","category":"method"},{"location":"api/#DifferentiationInterface.value_and_derivative-Tuple{ADTypes.AbstractADType, Any, Number, Any, DifferentiationInterface.ForwardMode}","page":"API reference","title":"DifferentiationInterface.value_and_derivative","text":"value_and_derivative(backend, f, x, [extras]) -> (y, der)\n\nCompute the primal value y = f(x) and the derivative der = f'(x) of a scalar-to-scalar function.\n\n\n\n\n\n","category":"method"},{"location":"api/#Multiderivative","page":"API reference","title":"Multiderivative","text":"","category":"section"},{"location":"api/","page":"API reference","title":"API reference","text":"Modules = [DifferentiationInterface]\nPages = [\"multiderivative.jl\"]","category":"page"},{"location":"api/#DifferentiationInterface.multiderivative!-Tuple{AbstractArray, ADTypes.AbstractADType, Any, Number, Any, DifferentiationInterface.ForwardMode}","page":"API reference","title":"DifferentiationInterface.multiderivative!","text":"multiderivative!(multider, backend, f, x, [extras]) -> multider\n\nCompute the (array-valued) derivative multider = f'(x) of a scalar-to-array function, overwriting multider if possible.\n\n\n\n\n\n","category":"method"},{"location":"api/#DifferentiationInterface.multiderivative-Tuple{ADTypes.AbstractADType, Any, Number, Any, DifferentiationInterface.ForwardMode}","page":"API reference","title":"DifferentiationInterface.multiderivative","text":"multiderivative(backend, f, x, [extras]) -> multider\n\nCompute the (array-valued) derivative multider = f'(x) of a scalar-to-array function.\n\n\n\n\n\n","category":"method"},{"location":"api/#DifferentiationInterface.value_and_multiderivative!-Tuple{AbstractArray, ADTypes.AbstractADType, Any, Number, Any, DifferentiationInterface.ForwardMode}","page":"API reference","title":"DifferentiationInterface.value_and_multiderivative!","text":"value_and_multiderivative!(multider, backend, f, x, [extras]) -> (y, multider)\n\nCompute the primal value y = f(x) and the (array-valued) derivative multider = f'(x) of a scalar-to-array function, overwriting multider if possible.\n\n\n\n\n\n","category":"method"},{"location":"api/#DifferentiationInterface.value_and_multiderivative-Tuple{ADTypes.AbstractADType, Any, Number, Any, DifferentiationInterface.ForwardMode}","page":"API reference","title":"DifferentiationInterface.value_and_multiderivative","text":"value_and_multiderivative(backend, f, x, [extras]) -> (y, multider)\n\nCompute the primal value y = f(x) and the (array-valued) derivative multider = f'(x) of a scalar-to-array function.\n\n\n\n\n\n","category":"method"},{"location":"api/#Gradient","page":"API reference","title":"Gradient","text":"","category":"section"},{"location":"api/","page":"API reference","title":"API reference","text":"Modules = [DifferentiationInterface]\nPages = [\"gradient.jl\"]","category":"page"},{"location":"api/#DifferentiationInterface.gradient!-Tuple{AbstractArray, ADTypes.AbstractADType, Any, AbstractArray, Any, DifferentiationInterface.ForwardMode}","page":"API reference","title":"DifferentiationInterface.gradient!","text":"gradient!(grad, backend, f, x, [extras]) -> grad\n\nCompute the gradient grad = ∇f(x) of an array-to-scalar function, overwriting grad if possible.\n\n\n\n\n\n","category":"method"},{"location":"api/#DifferentiationInterface.gradient-Tuple{ADTypes.AbstractADType, Any, AbstractArray, Any, DifferentiationInterface.ForwardMode}","page":"API reference","title":"DifferentiationInterface.gradient","text":"gradient(backend, f, x, [extras]) -> grad\n\nCompute the gradient grad = ∇f(x) of an array-to-scalar function.\n\n\n\n\n\n","category":"method"},{"location":"api/#DifferentiationInterface.value_and_gradient!-Tuple{AbstractArray, ADTypes.AbstractADType, Any, AbstractArray, Any, DifferentiationInterface.ForwardMode}","page":"API reference","title":"DifferentiationInterface.value_and_gradient!","text":"value_and_gradient!(grad, backend, f, x, [extras]) -> (y, grad)\n\nCompute the primal value y = f(x) and the gradient grad = ∇f(x) of an array-to-scalar function, overwriting grad if possible.\n\n\n\n\n\n","category":"method"},{"location":"api/#DifferentiationInterface.value_and_gradient-Tuple{ADTypes.AbstractADType, Any, AbstractArray, Any, DifferentiationInterface.ForwardMode}","page":"API reference","title":"DifferentiationInterface.value_and_gradient","text":"value_and_gradient(backend, f, x, [extras]) -> (y, grad)\n\nCompute the primal value y = f(x) and the gradient grad = ∇f(x) of an array-to-scalar function.\n\n\n\n\n\n","category":"method"},{"location":"api/#Jacobian","page":"API reference","title":"Jacobian","text":"","category":"section"},{"location":"api/","page":"API reference","title":"API reference","text":"Modules = [DifferentiationInterface]\nPages = [\"jacobian.jl\"]","category":"page"},{"location":"api/#DifferentiationInterface.jacobian!-Tuple{AbstractMatrix, ADTypes.AbstractADType, Any, AbstractArray, Any, DifferentiationInterface.AbstractMode}","page":"API reference","title":"DifferentiationInterface.jacobian!","text":"jacobian!(jac, backend, f, x, [extras]) -> jac\n\nCompute the Jacobian matrix jac = ∂f(x) of an array-to-array function, overwriting jac if possible.\n\nNotes\n\nRegardless of the shape of x and y, if x has length n and y has length m, then jac is expected to be a m × n matrix. This function acts as if the input and output had been flattened with vec.\n\n\n\n\n\n","category":"method"},{"location":"api/#DifferentiationInterface.jacobian-Tuple{ADTypes.AbstractADType, Any, AbstractArray, Any, DifferentiationInterface.AbstractMode}","page":"API reference","title":"DifferentiationInterface.jacobian","text":"jacobian(backend, f, x, [extras]) -> jac\n\nCompute the Jacobian matrix jac = ∂f(x) of an array-to-array function.\n\nNotes\n\nRegardless of the shape of x and y, if x has length n and y has length m, then jac is expected to be a m × n matrix. This function acts as if the input and output had been flattened with vec.\n\n\n\n\n\n","category":"method"},{"location":"api/#DifferentiationInterface.value_and_jacobian!-Tuple{AbstractMatrix, ADTypes.AbstractADType, Any, AbstractArray, Any, DifferentiationInterface.ForwardMode}","page":"API reference","title":"DifferentiationInterface.value_and_jacobian!","text":"value_and_jacobian!(jac, backend, f, x, [extras]) -> (y, jac)\n\nCompute the primal value y = f(x) and the Jacobian matrix jac = ∂f(x) of an array-to-array function, overwriting jac if possible.\n\nNotes\n\nRegardless of the shape of x and y, if x has length n and y has length m, then jac is expected to be a m × n matrix. This function acts as if the input and output had been flattened with vec.\n\n\n\n\n\n","category":"method"},{"location":"api/#DifferentiationInterface.value_and_jacobian-Tuple{ADTypes.AbstractADType, Any, AbstractArray, Any, DifferentiationInterface.AbstractMode}","page":"API reference","title":"DifferentiationInterface.value_and_jacobian","text":"value_and_jacobian(backend, f, x, [extras]) -> (y, jac)\n\nCompute the primal value y = f(x) and the Jacobian matrix jac = ∂f(x) of an array-to-array function.\n\nNotes\n\nRegardless of the shape of x and y, if x has length n and y has length m, then jac is expected to be a m × n matrix. This function acts as if the input and output had been flattened with vec.\n\n\n\n\n\n","category":"method"},{"location":"api/#Pushforward-(JVP)","page":"API reference","title":"Pushforward (JVP)","text":"","category":"section"},{"location":"api/","page":"API reference","title":"API reference","text":"Modules = [DifferentiationInterface]\nPages = [\"pushforward.jl\"]","category":"page"},{"location":"api/#DifferentiationInterface.pushforward","page":"API reference","title":"DifferentiationInterface.pushforward","text":"pushforward(backend, f, x, dx, [extras]) -> dy\n\nCompute the Jacobian-vector product dy = ∂f(x) * dx.\n\n\n\n\n\n","category":"function"},{"location":"api/#DifferentiationInterface.pushforward!","page":"API reference","title":"DifferentiationInterface.pushforward!","text":"pushforward!(dy, backend, f, x, dx, [extras]) -> dy\n\nCompute the Jacobian-vector product dy = ∂f(x) * dx, overwriting dy if possible.\n\n\n\n\n\n","category":"function"},{"location":"api/#DifferentiationInterface.value_and_pushforward","page":"API reference","title":"DifferentiationInterface.value_and_pushforward","text":"value_and_pushforward(backend, f, x, dx, [extras]) -> (y, dy)\n\nCompute the primal value y = f(x) and the Jacobian-vector product dy = ∂f(x) * dx.\n\n\n\n\n\n","category":"function"},{"location":"api/#DifferentiationInterface.value_and_pushforward!","page":"API reference","title":"DifferentiationInterface.value_and_pushforward!","text":"value_and_pushforward!(dy, backend, f, x, dx, [extras]) -> (y, dy)\n\nCompute the primal value y = f(x) and the Jacobian-vector product dy = ∂f(x) * dx, overwriting dy if possible.\n\ninfo: Interface requirement\nThis is the only required implementation for a forward mode backend.\n\n\n\n\n\n","category":"function"},{"location":"api/#Pullback-(JVP)","page":"API reference","title":"Pullback (JVP)","text":"","category":"section"},{"location":"api/","page":"API reference","title":"API reference","text":"Modules = [DifferentiationInterface]\nPages = [\"pullback.jl\"]","category":"page"},{"location":"api/#DifferentiationInterface.pullback","page":"API reference","title":"DifferentiationInterface.pullback","text":"pullback(backend, f, x, dy, [extras]) -> dx\n\nCompute the vector-Jacobian product dx = ∂f(x)' * dy.\n\n\n\n\n\n","category":"function"},{"location":"api/#DifferentiationInterface.pullback!","page":"API reference","title":"DifferentiationInterface.pullback!","text":"pullback!(dx, backend, f, x, dy, [extras]) -> dx\n\nCompute the vector-Jacobian product dx = ∂f(x)' * dy, overwriting dx if possible.\n\n\n\n\n\n","category":"function"},{"location":"api/#DifferentiationInterface.value_and_pullback","page":"API reference","title":"DifferentiationInterface.value_and_pullback","text":"value_and_pullback(backend, f, x, dy, [extras]) -> (y, dx)\n\nCompute the primal value y = f(x) and the vector-Jacobian product dx = ∂f(x)' * dy.\n\n\n\n\n\n","category":"function"},{"location":"api/#DifferentiationInterface.value_and_pullback!","page":"API reference","title":"DifferentiationInterface.value_and_pullback!","text":"value_and_pullback!(dx, backend, f, x, dy, [extras]) -> (y, dx)\n\nCompute the primal value y = f(x) and the vector-Jacobian product dx = ∂f(x)' * dy, overwriting dx if possible.\n\ninfo: Interface requirement\nThis is the only required implementation for a reverse mode backend.\n\n\n\n\n\n","category":"function"},{"location":"api/#Preparation","page":"API reference","title":"Preparation","text":"","category":"section"},{"location":"api/","page":"API reference","title":"API reference","text":"Modules = [DifferentiationInterface]\nPages = [\"prepare.jl\"]","category":"page"},{"location":"api/#DifferentiationInterface.prepare_derivative-Tuple{ADTypes.AbstractADType, Any, Number}","page":"API reference","title":"DifferentiationInterface.prepare_derivative","text":"prepare_derivative(backend, f, x) -> extras\n\nCreate an extras object that can be given to derivative operators.\n\n\n\n\n\n","category":"method"},{"location":"api/#DifferentiationInterface.prepare_gradient-Tuple{ADTypes.AbstractADType, Any, AbstractArray}","page":"API reference","title":"DifferentiationInterface.prepare_gradient","text":"prepare_gradient(backend, f, x) -> extras\n\nCreate an extras object that can be given to gradient operators.\n\n\n\n\n\n","category":"method"},{"location":"api/#DifferentiationInterface.prepare_jacobian-Tuple{ADTypes.AbstractADType, Any, AbstractArray}","page":"API reference","title":"DifferentiationInterface.prepare_jacobian","text":"prepare_jacobian(backend, f, x) -> extras\n\nCreate an extras object that can be given to jacobian operators.\n\n\n\n\n\n","category":"method"},{"location":"api/#DifferentiationInterface.prepare_multiderivative-Tuple{ADTypes.AbstractADType, Any, Number}","page":"API reference","title":"DifferentiationInterface.prepare_multiderivative","text":"prepare_multiderivative(backend, f, x) -> extras\n\nCreate an extras object that can be given to multiderivative operators.\n\n\n\n\n\n","category":"method"},{"location":"api/#DifferentiationInterface.prepare_pullback-Tuple{ADTypes.AbstractADType, Any, Any}","page":"API reference","title":"DifferentiationInterface.prepare_pullback","text":"prepare_pullback(backend, f, x) -> extras\n\nCreate an extras object that can be given to pullback operators.\n\n\n\n\n\n","category":"method"},{"location":"api/#DifferentiationInterface.prepare_pushforward-Tuple{ADTypes.AbstractADType, Any, Any}","page":"API reference","title":"DifferentiationInterface.prepare_pushforward","text":"prepare_pushforward(backend, f, x) -> extras\n\nCreate an extras object that can be given to pushforward operators.\n\n\n\n\n\n","category":"method"},{"location":"api/#Internals","page":"API reference","title":"Internals","text":"","category":"section"},{"location":"api/","page":"API reference","title":"API reference","text":"These are not part of the public API.","category":"page"},{"location":"api/","page":"API reference","title":"API reference","text":"Modules = [DifferentiationInterface]\nPages = [\"backends.jl\", \"mode.jl\", \"utils.jl\"]\nPublic = false","category":"page"},{"location":"api/#DifferentiationInterface.autodiff_mode-Tuple{ADTypes.AbstractForwardMode}","page":"API reference","title":"DifferentiationInterface.autodiff_mode","text":"autodiff_mode(backend)\n\nReturn ForwardMode() or ReverseMode() in a statically predictable way.\n\nThis function must be overloaded for backends that do not inherit from ADTypes.AbstractForwardMode or ADTypes.AbstractReverseMode (e.g. because they support both forward and reverse).\n\nWe classify ADTypes.AbstractFiniteDifferencesMode as forward mode.\n\n\n\n\n\n","category":"method"},{"location":"api/#DifferentiationInterface.ForwardMode","page":"API reference","title":"DifferentiationInterface.ForwardMode","text":"ForwardMode\n\nTrait identifying forward mode AD backends. Used for internal dispatch only.\n\n\n\n\n\n","category":"type"},{"location":"api/#DifferentiationInterface.ReverseMode","page":"API reference","title":"DifferentiationInterface.ReverseMode","text":"ReverseMode\n\nTrait identifying reverse mode AD backends. Used for internal dispatch only.\n\n\n\n\n\n","category":"type"},{"location":"api/#DifferentiationInterface.basisarray-Tuple{ADTypes.AbstractADType, AbstractArray, Any}","page":"API reference","title":"DifferentiationInterface.basisarray","text":"basisarray(backend, a::AbstractArray, i::CartesianIndex)\n\nConstruct the i-th stardard basis array in the vector space of a with element type eltype(a).\n\nNote\n\nIf an AD backend benefits from a more specialized basis array implementation, this function can be extended on the backend type.\n\n\n\n\n\n","category":"method"},{"location":"api/","page":"API reference","title":"API reference","text":"","category":"page"},{"location":"getting_started/#Getting-started","page":"Getting started","title":"Getting started","text":"","category":"section"},{"location":"getting_started/#operators","page":"Getting started","title":"Operators","text":"","category":"section"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":"Depending on the type of input and output, differentiation operators can have various names. We choose the following terminology for the ones we provide:","category":"page"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":" scalar output array output\nscalar input derivative multiderivative\narray input gradient jacobian","category":"page"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":"Most backends have custom implementations for all of these, which we reuse whenever possible.","category":"page"},{"location":"getting_started/#Variants","page":"Getting started","title":"Variants","text":"","category":"section"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":"Whenever it makes sense, four variants of the same operator are defined:","category":"page"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":"Operator non-mutating mutating non-mutating with primal mutating with primal\nDerivative derivative N/A value_and_derivative N/A\nMultiderivative multiderivative multiderivative! value_and_multiderivative value_and_multiderivative!\nGradient gradient gradient! value_and_gradient value_and_gradient!\nJacobian jacobian jacobian! value_and_jacobian value_and_jacobian!\nPushforward (JVP) pushforward pushforward! value_and_pushforward value_and_pushforward!\nPullback (VJP) pullback pullback! value_and_pullback value_and_pullback!","category":"page"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":"Note that scalar outputs can't be mutated, which is why derivative doesn't have mutating variants.","category":"page"},{"location":"getting_started/#Preparation","page":"Getting started","title":"Preparation","text":"","category":"section"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":"In many cases, automatic differentiation can be accelerated if the function has been run at least once (e.g. to record a tape) and if some cache objects are provided. This is a backend-specific procedure, but we expose a common syntax to achieve it.","category":"page"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":"Operator preparation function\nDerivative prepare_derivative\nMultiderivative prepare_multiderivative\nGradient prepare_gradient\nJacobian prepare_jacobian\nPushforward (JVP) prepare_pushforward\nPullback (VJP) prepare_pullback","category":"page"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":"If you run prepare_operator(backend, f, x), it will create an object called extras containing the necessary information to speed up operator and its variants. This information is specific to backend and f, as well as the type and size of the input x, but it should work with different values of x.","category":"page"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":"You can then call operator(backend, f, similar_x, extras), which should be faster than operator(backend, f, similar_x). This is especially worth it if you plan to call operator several times in similar settings: you can think of it as a warm up.","category":"page"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":"By default, all the preparation functions return nothing. We do not make any guarantees on their implementation for each backend, or on the performance gains that can be expected.","category":"page"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":"","category":"page"},{"location":"developer/#For-AD-developers","page":"For AD developers","title":"For AD developers","text":"","category":"section"},{"location":"developer/#Backend-requirements","page":"For AD developers","title":"Backend requirements","text":"","category":"section"},{"location":"developer/","page":"For AD developers","title":"For AD developers","text":"Every operator can be implemented from either of these two primitives:","category":"page"},{"location":"developer/","page":"For AD developers","title":"For AD developers","text":"the pushforward (in forward mode), computing a Jacobian-vector product\nthe pullback (in reverse mode), computing a vector-Jacobian product","category":"page"},{"location":"developer/","page":"For AD developers","title":"For AD developers","text":"The only requirement for a backend is therefore to implement either value_and_pushforward! or value_and_pullback!, from which the rest of the operators can be deduced. We provide a standard series of fallbacks, but we leave it to each backend to redefine as many of the utilities as necessary to achieve optimal performance.","category":"page"},{"location":"developer/","page":"For AD developers","title":"For AD developers","text":"Every backend we support corresponds to a package extension of DifferentiationInterface.jl (located in the ext subfolder). Advanced users are welcome to code more backends and submit pull requests!","category":"page"},{"location":"developer/#Fallback-call-structure","page":"For AD developers","title":"Fallback call structure","text":"","category":"section"},{"location":"developer/#Forward-mode","page":"For AD developers","title":"Forward mode","text":"","category":"section"},{"location":"developer/","page":"For AD developers","title":"For AD developers","text":"flowchart LR\n    subgraph Pushforward\n    value_and_pushforward!\n    value_and_pushforward --> value_and_pushforward!\n    pushforward! --> value_and_pushforward!\n    pushforward --> value_and_pushforward\n    end\n\n    subgraph Derivative\n    value_and_derivative --> value_and_pushforward\n    derivative --> pushforward\n    end\n    \n    subgraph Multiderivative\n    value_and_multiderivative! --> value_and_pushforward!\n    value_and_multiderivative --> value_and_pushforward\n    multiderivative! --> pushforward!\n    multiderivative --> pushforward\n    end\n\n    subgraph Gradient\n    value_and_gradient! --> pushforward\n    value_and_gradient --> value_and_gradient!\n    gradient! --> value_and_gradient!\n    gradient --> value_and_gradient\n    end\n\n    subgraph Jacobian\n    value_and_jacobian! --> pushforward!\n    value_and_jacobian --> value_and_jacobian!\n    jacobian! --> value_and_jacobian!\n    jacobian --> value_and_jacobian\n    end","category":"page"},{"location":"developer/#Reverse-mode","page":"For AD developers","title":"Reverse mode","text":"","category":"section"},{"location":"developer/","page":"For AD developers","title":"For AD developers","text":"flowchart LR\n    subgraph Pullback\n    value_and_pullback!\n    value_and_pullback --> value_and_pullback!\n    pullback! --> value_and_pullback!\n    pullback --> value_and_pullback\n    end\n    \n    subgraph Derivative\n    value_and_derivative --> value_and_pullback\n    derivative --> pullback\n    end\n    \n    subgraph Multiderivative\n    value_and_multiderivative! --> pullback\n    value_and_multiderivative --> value_and_multiderivative!\n    multiderivative! --> value_and_multiderivative!\n    multiderivative --> value_and_multiderivative\n    end\n\n    subgraph Gradient\n    value_and_gradient! --> value_and_pullback!\n    value_and_gradient --> value_and_pullback\n    gradient! --> pullback!\n    gradient --> pullback\n    end\n\n    subgraph Jacobian\n    value_and_jacobian! --> pullback!\n    value_and_jacobian --> value_and_jacobian!\n    jacobian! --> value_and_jacobian!\n    jacobian --> value_and_jacobian\n    end","category":"page"},{"location":"developer/","page":"For AD developers","title":"For AD developers","text":"","category":"page"},{"location":"backends/","page":"Backends","title":"Backends","text":"CollapsedDocStrings = true","category":"page"},{"location":"backends/#Backends","page":"Backends","title":"Backends","text":"","category":"section"},{"location":"backends/#Types","page":"Backends","title":"Types","text":"","category":"section"},{"location":"backends/","page":"Backends","title":"Backends","text":"The possible backend choices are defined by ADTypes.jl.","category":"page"},{"location":"backends/","page":"Backends","title":"Backends","text":"warning: Warning\nOnly the backends listed here are supported by DifferentiationInterface.jl, even though ADTypes.jl defines more.","category":"page"},{"location":"backends/","page":"Backends","title":"Backends","text":"AutoChainRules\nAutoDiffractor\nAutoEnzyme\nAutoForwardDiff\nAutoForwardDiff()\nAutoFiniteDiff\nAutoPolyesterForwardDiff\nAutoPolyesterForwardDiff()\nAutoReverseDiff\nAutoZygote","category":"page"},{"location":"backends/#ADTypes.AutoChainRules","page":"Backends","title":"ADTypes.AutoChainRules","text":"AutoChainRules{RC}\n\nChooses any AD library based on ChainRulesCore.jl, given an appropriate RuleConfig object.\n\nFields\n\nruleconfig::RC\n\n\n\n\n\n","category":"type"},{"location":"backends/#ADTypes.AutoDiffractor","page":"Backends","title":"ADTypes.AutoDiffractor","text":"AutoDiffractor\n\nChooses Diffractor.jl.\n\n\n\n\n\n","category":"type"},{"location":"backends/#ADTypes.AutoEnzyme","page":"Backends","title":"ADTypes.AutoEnzyme","text":"AutoEnzyme{M}\n\nChooses Enzyme.jl.\n\nFields\n\nmode::M = nothing\n\n\n\n\n\nAutoEnzyme(Val(:forward))\nAutoEnzyme(Val(:reverse))\n\nConstruct a forward or reverse mode AutoEnzyme backend.\n\nwarning: Warning\nThis is the mode convention chosen by DifferentiationInterface.jl, for lack of a global consensus (see ADTypes.jl#24).\n\n\n\n\n\n","category":"type"},{"location":"backends/#ADTypes.AutoForwardDiff","page":"Backends","title":"ADTypes.AutoForwardDiff","text":"AutoForwardDiff{chunksize,T}\n\nChooses ForwardDiff.jl.\n\nFields\n\ntag::T\n\n\n\n\n\n","category":"type"},{"location":"backends/#ADTypes.AutoForwardDiff-Tuple{}","page":"Backends","title":"ADTypes.AutoForwardDiff","text":"AutoForwardDiff(; chunksize = nothing, tag = nothing)\n\nConstructor.\n\n\n\n\n\n","category":"method"},{"location":"backends/#ADTypes.AutoFiniteDiff","page":"Backends","title":"ADTypes.AutoFiniteDiff","text":"AutoFiniteDiff{T1,T2,T3}\n\nChooses FiniteDiff.jl.\n\nFields\n\nfdtype::T1 = Val(:forward)\nfdjtype::T2 = fdtype\nfdhtype::T3 = Val(:hcentral)\n\n\n\n\n\n","category":"type"},{"location":"backends/#ADTypes.AutoPolyesterForwardDiff","page":"Backends","title":"ADTypes.AutoPolyesterForwardDiff","text":"AutoPolyesterForwardDiff{chunksize}\n\nChooses PolyesterForwardDiff.jl.\n\n\n\n\n\n","category":"type"},{"location":"backends/#ADTypes.AutoPolyesterForwardDiff-Tuple{}","page":"Backends","title":"ADTypes.AutoPolyesterForwardDiff","text":"AutoPolyesterForwardDiff(; chunksize = nothing)\n\nConstructor.\n\n\n\n\n\n","category":"method"},{"location":"backends/#ADTypes.AutoReverseDiff","page":"Backends","title":"ADTypes.AutoReverseDiff","text":"AutoReverseDiff\n\nChooses ReverseDiff.jl.\n\nFields\n\ncompile::Bool = false\n\n\n\n\n\n","category":"type"},{"location":"backends/#ADTypes.AutoZygote","page":"Backends","title":"ADTypes.AutoZygote","text":"AutoZygote\n\nChooses Zygote.jl.\n\n\n\n\n\n","category":"type"},{"location":"backends/#Package-extensions","page":"Backends","title":"Package extensions","text":"","category":"section"},{"location":"backends/","page":"Backends","title":"Backends","text":"CurrentModule = DifferentiationInterface","category":"page"},{"location":"backends/","page":"Backends","title":"Backends","text":"Backend-specific extension content is not part of the public API.","category":"page"},{"location":"backends/","page":"Backends","title":"Backends","text":"Modules = [\n    Base.get_extension(DifferentiationInterface, :DifferentiationInterfaceChainRulesCoreExt),\n    Base.get_extension(DifferentiationInterface, :DifferentiationInterfaceDiffractorExt),\n    Base.get_extension(DifferentiationInterface, :DifferentiationInterfaceEnzymeExt),\n    Base.get_extension(DifferentiationInterface, :DifferentiationInterfaceFiniteDiffExt),\n    Base.get_extension(DifferentiationInterface, :DifferentiationInterfaceForwardDiffExt),\n    Base.get_extension(DifferentiationInterface, :DifferentiationInterfacePolyesterForwardDiffExt),\n    Base.get_extension(DifferentiationInterface, :DifferentiationInterfaceReverseDiffExt),\n    Base.get_extension(DifferentiationInterface, :DifferentiationInterfaceZygoteExt)\n]\nFilter = t -> !(t <: ADTypes.AbstractADType)","category":"page"},{"location":"backends/","page":"Backends","title":"Backends","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"EditURL = \"https://github.com/gdalle/DifferentiationInterface.jl/blob/main/README.md\"","category":"page"},{"location":"#DifferentiationInterface","page":"Home","title":"DifferentiationInterface","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"(Image: Dev) (Image: Build Status) (Image: Coverage) (Image: Code Style: Blue)","category":"page"},{"location":"","page":"Home","title":"Home","text":"An interface to various automatic differentiation backends in Julia.","category":"page"},{"location":"#Goal","page":"Home","title":"Goal","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This package provides a backend-agnostic syntax to differentiate functions f(x) = y, where x and y are either real numbers or abstract arrays.","category":"page"},{"location":"","page":"Home","title":"Home","text":"It supports in-place versions of every operator, and ensures type stability whenever possible.","category":"page"},{"location":"#Compatibility","page":"Home","title":"Compatibility","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"We support some of the backends defined by ADTypes.jl:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Backend Type\nChainRulesCore.jl AutoChainRules(ruleconfig)\nDiffractor.jl AutoDiffractor()\nEnzyme.jl AutoEnzyme(Val(:forward)) or AutoEnzyme(Val(:reverse))\nFiniteDiff.jl AutoFiniteDiff()\nForwardDiff.jl AutoForwardDiff()\nPolyesterForwardDiff.jl AutoPolyesterForwardDiff(; chunksize=C)\nReverseDiff.jl AutoReverseDiff()\nZygote.jl AutoZygote()","category":"page"},{"location":"#Example","page":"Home","title":"Example","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Setup:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> import DifferentiationInterface, ADTypes, ForwardDiff\n\njulia> backend = ADTypes.AutoForwardDiff();\n\njulia> f(x) = sum(abs2, x);","category":"page"},{"location":"","page":"Home","title":"Home","text":"Out-of-place gradient:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> DifferentiationInterface.value_and_gradient(backend, f, [1., 2., 3.])\n(14.0, [2.0, 4.0, 6.0])","category":"page"},{"location":"","page":"Home","title":"Home","text":"In-place gradient:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> grad = zeros(3);\n\njulia> DifferentiationInterface.value_and_gradient!(grad, backend, f, [1., 2., 3.])\n(14.0, [2.0, 4.0, 6.0])\n\njulia> grad\n3-element Vector{Float64}:\n 2.0\n 4.0\n 6.0","category":"page"},{"location":"#Related-packages","page":"Home","title":"Related packages","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"AbstractDifferentiation.jl is the original inspiration for DifferentiationInterface.jl. We aim to be less generic (one input, one output, first order only) but more efficient (type stability, memory reuse).\nAutoDiffOperators.jl is an attempt to bridge ADTypes.jl with AbstractDifferentiation.jl. We provide similar functionality (except for the matrix-like behavior) but cover more backends.","category":"page"},{"location":"#Roadmap","page":"Home","title":"Roadmap","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Goals for future releases:","category":"page"},{"location":"","page":"Home","title":"Home","text":"implement backend-specific cache objects\nsupport in-place functions f!(y, x)\ndefine user-facing functions to test and benchmark backends against each other","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"}]
}
