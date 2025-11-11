using BusinessModels.Abstractions.Commons.Commands;
using BusinessModels.Abstractions.Commons.Entities;

namespace BusinessModels.Commons.Commands;

public abstract class RegisterEntityCommandDTO<TIEntity>
    where TIEntity : IEntity
{
    public abstract class Requirement
        : IRegisterEntityCommandRequirement
    {
        public Guid CommanderId { get; set; }
        public abstract TIEntity ToEntity();
    }

    public abstract class Result
        : IRegisterEntityCommandResult<TIEntity>
    {
        public TIEntity CommandResult { get; private set; }

        protected Result() { }
        protected Result(TIEntity commandResult)
        {
            CommandResult = commandResult;
        }


    }
}
