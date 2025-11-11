using BusinessModels.Abstractions.Commons.Commands;
using BusinessModels.Abstractions.Commons.Entities;

namespace BusinessModels.Commons.Commands;

public abstract class RegisterEntityCommandDTO<TIEntity>
    where TIEntity : IEntity
{
    public abstract class Requirement
        : IRegisterEntityCommandRequirement<TIEntity>
    {
        public Guid CommanderId { get; private set; }
        public void SetCommanderId(Guid commanderId)
            => CommanderId = commanderId;
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
