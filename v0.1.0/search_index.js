var documenterSearchIndex = {"docs":
[{"location":"#WaterPhysics.jl","page":"Home","title":"WaterPhysics.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Temperature dependencies of water physical properties. See WaterPhysics.jl for the source code.","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"julia> using Pkg;\njulia> Pkg.add(\"WaterPhysics\");","category":"page"},{"location":"#Example","page":"Home","title":"Example","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"using WaterPhysics\n\n# calculate the relative viscosity of liquid water at 300 K\nf_vis = relative_viscosity(300.0);","category":"page"},{"location":"API/#API","page":"API","title":"API","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"CurrentModule = WaterPhysics","category":"page"},{"location":"API/#Capillary-pressure","page":"API","title":"Capillary pressure","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"Capillary pressure of liquid water in a pipe is a function of surface tension     (gamma), pipe raduis (r), and contact angle (alpha):","category":"page"},{"location":"API/","page":"API","title":"API","text":"P_c = dfracgamma cdot textcos(alpha)r","category":"page"},{"location":"API/","page":"API","title":"API","text":"capillary_pressure","category":"page"},{"location":"API/#WaterPhysics.capillary_pressure","page":"API","title":"WaterPhysics.capillary_pressure","text":"capillary_pressure(r::FT, T::FT) where {FT<:AbstractFloat}\ncapillary_pressure(r::FT, T::FT, α::FT) where {FT<:AbstractFloat}\n\nCompute the capillary pressure in [Pa], given\n\nr Curvature radius in [m]\nT Water vapor temperature in [K]\nα Contact angle in [°]\n\n\n\n\n\n","category":"function"},{"location":"API/#Diffusive-coefficient-of-water-vapor","page":"API","title":"Diffusive coefficient of water vapor","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"Diffusive coefficient of water vapor is a temperature-dependent function, this     dependence impact leaf gas exchange via change the maximal stomatal     conductance to water vapor as the stomatal conductance should nto exceed     its structural limit. To account for this effect, we provided a function to     calculate the diffusive coefficient relative to 25 Celcius.","category":"page"},{"location":"API/","page":"API","title":"API","text":"relative_diffusive_coefficient","category":"page"},{"location":"API/#WaterPhysics.relative_diffusive_coefficient","page":"API","title":"WaterPhysics.relative_diffusive_coefficient","text":"relative_diffusive_coefficient(T::FT) where {FT<:AbstractFloat}\n\nReturns the relative diffusive coefficient of water vapor in air, given\n\nT Water vapor temperature in [K]\n\n\n\n\n\n","category":"function"},{"location":"API/#Latent-heat-of-evaporation","page":"API","title":"Latent heat of evaporation","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"Water evaporation from liquid phase is a key process to regulate leaf     temperature, and to best represent this process. We computed the latent     heat coefficient from water temperature:","category":"page"},{"location":"API/","page":"API","title":"API","text":"latent_heat_vapor","category":"page"},{"location":"API/#WaterPhysics.latent_heat_vapor","page":"API","title":"WaterPhysics.latent_heat_vapor","text":"latent_heat_vapor(T::FT) where {FT<:AbstractFloat}\n\nThe specific latent heat of vaporization, given\n\nT Liquid water temperature in [K]\n\n\n\n\n\n","category":"function"},{"location":"API/#Surface-tension-of-air-water-interface","page":"API","title":"Surface tension of air-water interface","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"When water temperature increases, the surface tension at the air-water     interface decreases. Surface tension changes impacts the plant water     transport via two aspects. First, if surface tension is lower, for a     constant soil water content, the soil matrix potential gets less negative     because the capillary pressure at the air-water interface decreases. And     this is beneficial to plants. Second, the air-water interface at the pit     membrane also has lower capillary pressure when temperature increases,     meaning that the xylem conduits are less resistant to drought-induced     air-seeded cavitation. And this is harmful for plants. Though the surface     tension does not differ much with temperature change within the plant     physiological active range, we account for this effect in our Land model.","category":"page"},{"location":"API/","page":"API","title":"API","text":"surface_tension\nrelative_surface_tension","category":"page"},{"location":"API/#WaterPhysics.surface_tension","page":"API","title":"WaterPhysics.surface_tension","text":"surface_tension(T::FT) where {FT<:AbstractFloat}\n\nSurface tension [N m⁻¹] of water against air, given\n\nT Liquid water temperature in [K]\n\nThe equation used is\n\nγ = 02358 \n    left( 1 - dfracTT_c right)^1256 \n    left 1 - 0625  left( 1 - dfracTT_c right) right\n\nSee http://www.iapws.org/relguide/Surf-H2O.html\n\n\n\n\n\n","category":"function"},{"location":"API/#WaterPhysics.relative_surface_tension","page":"API","title":"WaterPhysics.relative_surface_tension","text":"relative_surface_tension(T::FT) where {FT<:AbstractFloat}\n\nRelative surface tension of water against air relative to 298.15 K, given\n\nT Liquid water temperature in [K]\n\nThe equation used is\n\nγ = 02358 \n    left( 1 - dfracTT_c right)^1256 \n    left 1 - 0625  left( 1 - dfracTT_c right) right\n\nSee http://www.iapws.org/relguide/Surf-H2O.html\n\nA reference temperature at 298.15 K is used because the hydraulic conductances and vulnerability curves of plants are described at 298.15 K.\n\n\n\n\n\n","category":"function"},{"location":"API/#Vapor-pressure","page":"API","title":"Vapor pressure","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"When temperature increases, liquid water vapor pressure increases     exponentially. And this correlation is accounted for using the functions     below:","category":"page"},{"location":"API/","page":"API","title":"API","text":"saturation_vapor_pressure\nsaturation_vapor_pressure_slope","category":"page"},{"location":"API/#WaterPhysics.saturation_vapor_pressure","page":"API","title":"WaterPhysics.saturation_vapor_pressure","text":"saturation_vapor_pressure(T::FT) where {FT<:AbstractFloat}\nsaturation_vapor_pressure(T::FT, Ψ::FT) where {FT<:AbstractFloat}\n\nReturn the saturation vapor pressure, given\n\nT Liquid water temperature in [K]\nΨ Liquid water pressure in [Pa], positive/negative for convex/concave   interface; if Ψ is given, pressure_correction is made\n\n\n\n\n\n","category":"function"},{"location":"API/#WaterPhysics.saturation_vapor_pressure_slope","page":"API","title":"WaterPhysics.saturation_vapor_pressure_slope","text":"saturation_vapor_pressure_slope(T::FT) where {FT<:AbstractFloat}\nsaturation_vapor_pressure_slope(T::FT, Ψ::FT) where {FT<:AbstractFloat}\n\nReturn the 1st order derivative of saturation vapor pressure, given\n\nT Liquid water temperature in [K]\nΨ Liquid water pressure in [Pa], positive/negative for convex/concave   interface; if Ψ is given, pressure_correction is made\n\nCompute the the 1st order derivative of saturation vapor pressure over a plane     surface by integration of the Clausius-Clapeyron relation.\n\nThe re-arranged Clausius-Clapeyron relation\n\nfracP_sat^*T = P_sat  dfrac LH_0 + Δc_p  (T - T_triple)\n                                         R_v  T^2 \n\n\n\n\n\n","category":"function"},{"location":"API/","page":"API","title":"API","text":"Yet, the saturation vapor pressure is not only a function of temperature, but     also a function of the air-water interface curvature, known as the Kelvin     equation. The package provide pressure_correction to make the     correction.","category":"page"},{"location":"API/","page":"API","title":"API","text":"pressure_correction","category":"page"},{"location":"API/#WaterPhysics.pressure_correction","page":"API","title":"WaterPhysics.pressure_correction","text":"pressure_correction(T::FT, Ψ::FT) where {FT<:AbstractFloat}\n\nMake Kelvin correction to saturation vapor pressure, given\n\nT Liquid water temperature in [K]\nΨ Liquid water pressure in [Pa], positive/negative for convex/concave   interface\n\nThe Kelvin equation is\n\nlog left( dfracP_satP_sat^* right) =\ndfracΨ  V_mR  T\n\n\n\n\n\n","category":"function"},{"location":"API/#Viscosity-of-liquid-water","page":"API","title":"Viscosity of liquid water","text":"","category":"section"},{"location":"API/","page":"API","title":"API","text":"When temperature increases, liquid water viscosuty decreases, meaning that the     resistance for water decreases and the pressure drop per flow rate     decreases. This effect is pretty significant as 1 degree increase of     temperature results in about 2.4% drop in viscosity, and this is very     beneficial to plant water transport. Unfortunately, to our knowledge, very     few models account for this effect when modeling plant hydraulics because     of the difficulty in modeling the energy budget along the flow path. We     plan to have this effect accounted for in our CliMA Land model, by     computing the water tempreature along the flow path and thus the viscosity     change. The functions to be used are:","category":"page"},{"location":"API/","page":"API","title":"API","text":"viscosity\nrelative_viscosity","category":"page"},{"location":"API/#WaterPhysics.viscosity","page":"API","title":"WaterPhysics.viscosity","text":"viscosity(T::FT) where {FT<:AbstractFloat}\n\nViscosity of water in [Pa s], given\n\nT Liquid water temperature in [K]\n\nEquation used is\n\nυ = A  exp left( dfracBT + CT + DT^2 right)\n\nand the fitting parameters are from Reid, Prausnitz, & Poling (1987), valid through 273-643 K\n\nA = 1.856E-14 # Pa s\nB = 4209      # K\nC = 0.04527   # K⁻¹\nD = -3.376E-5 # K⁻²\n\n\n\n\n\n","category":"function"},{"location":"API/#WaterPhysics.relative_viscosity","page":"API","title":"WaterPhysics.relative_viscosity","text":"relative_viscosity(T::FT) where {FT<:AbstractFloat}\n\nViscosity relative to 25 degree C (298.15 K), given\n\nT Liquid water temperature in [K]\n\nEquation used is\n\nυ = A  exp left( dfracBT + CT + DT^2 right)\n\nand the fitting parameters are from Reid, Prausnitz, & Poling (1987), valid through 273-643 K\n\nB = 4209      # K\nC = 0.04527   # K⁻¹\nD = -3.376E-5 # K⁻²\n\n\n\n\n\n","category":"function"}]
}
