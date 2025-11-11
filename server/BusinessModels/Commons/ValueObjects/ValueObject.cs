namespace BusinessModels.Commons.ValueObjects;

public abstract record ValueObject<TValue>
{
    public TValue Value { get; protected init; }

#pragma warning disable CS8618 // O campo não anulável precisa conter um valor não nulo ao sair do construtor. Considere adicionar o modificador "obrigatório" ou declarar como anulável.
    protected ValueObject() { }
#pragma warning restore CS8618 // O campo não anulável precisa conter um valor não nulo ao sair do construtor. Considere adicionar o modificador "obrigatório" ou declarar como anulável.

    protected ValueObject(TValue value)
    {
        Value = value;
    }

    protected static bool EqualOperator(ValueObject<TValue> left, ValueObject<TValue> right)
        => Equals(left, right);

    protected static bool NotEqualOperator(ValueObject<TValue> left, ValueObject<TValue> right)
        => !Equals(left, right);
}
