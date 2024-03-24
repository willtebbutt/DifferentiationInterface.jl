module DifferentiationInterfaceTapedExt

using ADTypes: ADTypes
using DifferentiationInterface: AutoTaped, myupdate!!
import DifferentiationInterface as DI
using Taped: build_rrule, value_and_pullback!!

DI.supports_mutation(::AutoTaped) = DI.MutationNotSupported()

function DI.value_and_pullback(f::F, ::AutoTaped, x, dy, extras::Nothing) where {F}
    rrule = build_rrule(f, x)
    # TODO: fix for https://github.com/withbayes/Taped.jl/issues/97
    y = f(x)
    # TODO: 
    dy_righttype = convert(Taped.tangent_type(Taped._typeof(y)), dy)
    _, (_, dx) = value_and_pullback!!(rrule, dy_righttype, f, x)
    return y, dx
end

end
