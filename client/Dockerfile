# =============================
# Angular 20 - Hot Reload (WSL2 compatível)
# =============================
FROM node:22

WORKDIR /app

# Copia apenas os arquivos de dependência
COPY package*.json ./
RUN npm install

# Copia o restante do código
COPY . .

# Expõe a porta
EXPOSE 4200

# Ativa watch com polling para detectar mudanças no Windows
ENV CHOKIDAR_USEPOLLING=true
ENV NG_CLI_ANALYTICS=false

# Inicia servidor dev
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0", "--poll", "2000"]
