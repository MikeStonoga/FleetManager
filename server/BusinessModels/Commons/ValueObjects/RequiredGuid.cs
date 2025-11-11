using BusinessModels.Abstractions.Commons.ValueObjects;
using System.ComponentModel.DataAnnotations;

namespace BusinessModels.Commons.ValueObjects;

public sealed record RequiredGuid
    : ValueObject<Guid>
    , IRequiredGuid
{
    public RequiredGuid(Guid value, string propertyName)
    {
        if (value == Guid.Empty)
            throw new ValidationException($"{propertyName} is required!");

        Value = value;
    }

    public static implicit operator Guid(RequiredGuid value)
       => value.Value;
}
