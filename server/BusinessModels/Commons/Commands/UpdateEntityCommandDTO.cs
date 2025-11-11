using BusinessModels.Abstractions.Commons.Commands;

namespace BusinessModels.Commons.Commands;

public abstract class UpdateEntityCommandDTO
{
    public class Requirement
        : CommandRequirement
        , IUpdateEntityCommandRequirement
    {
        public Guid Id { get; set; }
    }
}
