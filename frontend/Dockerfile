# Usar una imagen de Nginx para servir archivos estáticos
FROM nginx:alpine

# Eliminar archivos por defecto de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar los archivos del frontend a la carpeta de Nginx
COPY . /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80
