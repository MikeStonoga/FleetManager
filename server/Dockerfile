# =========================
# 1) Build stage
# =========================
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

# Copia apenas os .csproj para cache eficiente
COPY API.WebHost/API.WebHost.csproj API.WebHost/
COPY Application/Application.csproj Application/
COPY Application.Abstractions/Application.Abstractions.csproj Application.Abstractions/
COPY BusinessModels/BusinessModels.csproj BusinessModels/
COPY BusinessModels.Abstractions/BusinessModels.Abstractions.csproj BusinessModels.Abstractions/
COPY Adapters.Data.Persistency/Adapters.Data.Persistency.csproj Adapters.Data.Persistency/
COPY Infra.Data.EfCore.PostgreSql/Infra.Data.EfCore.PostgreSql.csproj Infra.Data.EfCore.PostgreSql/
COPY Tests.Unit/Tests.Unit.csproj Tests.Unit/

# Restaura as dependências do projeto principal
RUN dotnet restore API.WebHost/API.WebHost.csproj

# Copia o restante do código
COPY . .

# Publica a Web API
RUN dotnet publish API.WebHost/API.WebHost.csproj -c Release -o /app/publish

# =========================
# 2) Runtime stage
# =========================
FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app
COPY --from=build /app/publish .
EXPOSE 8080
ENTRYPOINT ["dotnet", "API.WebHost.dll"]
