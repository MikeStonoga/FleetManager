namespace BusinessModels.Abstractions.Commons.ValueObjects;

public interface IValueObject<TValue>
{
    TValue Value { get; }
}
