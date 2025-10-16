# Usa uma imagem oficial do NGINX como base
FROM nginx:alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /usr/share/nginx/html

# Copia os arquivos do seu projeto para o diretório de trabalho do contêiner
COPY index.html .
COPY script.js .

# Expõe a porta 80 para permitir o acesso ao NGINX
EXPOSE 80