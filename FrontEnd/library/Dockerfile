FROM node:18.17.1 as builder
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build --prod
FROM nginx:alpine
# Copiar los archivos compilados de la aplicación Angular al servidor web de Nginx
COPY --from=builder /app/dist/* /usr/share/nginx/html/
