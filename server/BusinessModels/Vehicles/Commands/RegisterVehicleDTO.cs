using BusinessModels.Abstractions.Vehicles;
using BusinessModels.Abstractions.Vehicles.Commands;
using BusinessModels.Commons.Commands;

namespace BusinessModels.Vehicles.Commands;

public abstract class RegisterVehicleDTO
{
    public class Requirement
        : RegisterEntityCommandDTO<IVehicle>.Requirement
        , IRegisterVehicleRequirement
    {
        public Guid FleetId { get; set; }
        public Guid TypeId { get; set; }
        public string ChassisSeries { get; set; }
        public long ChassisNumber { get; set; }
        public string Color { get; set; }

        public override IVehicle ToEntity()
            => new Vehicle(this);
    }

    public class Result
        : RegisterEntityCommandDTO<IVehicle>.Result
    {

    }
}
