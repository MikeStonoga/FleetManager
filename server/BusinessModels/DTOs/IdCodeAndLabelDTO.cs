using BusinessModels.Abstractions.Commons.DTOs;

namespace BusinessModels.DTOs;

public record IdCodeAndLabelDTO
    : IIdCodeAndLabelDTO
{
    public Guid Id { get; }
    public int Code { get; }
    public string Label { get; }

    private IdCodeAndLabelDTO() { }
    public IdCodeAndLabelDTO(Guid id, int code, string label)
    {
        Id = id;
        Code = code;
        Label = label;
    }

}
