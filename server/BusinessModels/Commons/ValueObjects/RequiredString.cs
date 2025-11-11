using BusinessModels.Abstractions.Commons.ValueObjects;
using System.ComponentModel.DataAnnotations;

namespace BusinessModels.Commons.ValueObjects;


public sealed record RequiredString
    : ValueObject<string>
    , IRequiredString
{

    public RequiredString(
        string? value,
        string propertyName,
        int? minLength = null,
        int? maxLength = null)
    {
        // 1. Trim e valida vazio
        if (string.IsNullOrWhiteSpace(value))
            throw new ValidationException($"The value of {propertyName} cannot be null, empty, or whitespace.");

        var trimmed = value.Trim();

        // 2. Valida minLength
        if (minLength.HasValue && trimmed.Length < minLength.Value)
            throw new ValidationException($"The value of {propertyName} must have at least {minLength.Value} characters.");

        // 3. Valida maxLength
        if (maxLength.HasValue && trimmed.Length > maxLength.Value)
            throw new ValidationException($"The value of {propertyName} must have no more than {maxLength.Value} characters.");

        Value = trimmed;
    }


    public override string ToString() => Value;

    public static implicit operator string(RequiredString value)
        => value.Value;
}
