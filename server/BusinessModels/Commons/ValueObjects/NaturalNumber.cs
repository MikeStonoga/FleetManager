using BusinessModels.Abstractions.Commons.ValueObjects;
using System.ComponentModel.DataAnnotations;

namespace BusinessModels.Commons.ValueObjects;

public sealed record NaturalNumber
    : ValueObject<long>
    , INaturalNumber
{
    public NaturalNumber(long value, string propertyName)
        : base(Validate(value, propertyName)) { }

    private static long Validate(long value, string propertyName)
    {
        if (value < 0)
            throw new ValidationException($"{propertyName} is a natural number and cannot be negative!");

        return value;
    }


    public static implicit operator long(NaturalNumber number) => number.Value;

    public override string ToString() => Value.ToString();
}
