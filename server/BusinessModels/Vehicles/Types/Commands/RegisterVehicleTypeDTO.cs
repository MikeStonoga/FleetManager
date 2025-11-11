using BusinessModels.Abstractions.Vehicles.Types;
using BusinessModels.Abstractions.Vehicles.Types.Commands;
using BusinessModels.Commons.Commands;

namespace BusinessModels.Vehicles.Types.Commands;

public abstract class RegisterVehicleTypeDTO
{
    public class Requirement
        : RegisterEntityCommandDTO<IVehicleType>.Requirement
        , IRegisterVehicleTypeRequirement
    {
        public string Name { get; set; }
        public int NumberOfPassengers { get; set; }

        public override IVehicleType ToEntity()
            => new VehicleType(this);
    }

    public class Result
        : RegisterEntityCommandDTO<IVehicleType>.Result
        , IRegisterVehicleTypeResult
    {
    }
}
