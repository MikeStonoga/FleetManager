namespace BusinessModels.Abstractions.Commons.DTOs;

public interface IIdCodeAndLabelDTO
{
    Guid Id { get; }
    int Code { get; }
    string Label { get; }
}
