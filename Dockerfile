# Usar una imagen base de Nginx ligera
   FROM nginx:alpine

   # Eliminar el contenido HTML por defecto de Nginx
   RUN rm -rf /usr/share/nginx/html/*

   # Copiar los archivos de tu aplicación (HTML, CSS, JS, JSON) al directorio web de Nginx
   # Asegúrate de que este Dockerfile esté en la raíz de tu proyecto (matrixTest)
   COPY . /usr/share/nginx/html

   # Exponer el puerto 80 (puerto HTTP estándar) del contenedor
   EXPOSE 80

   # Comando para iniciar Nginx cuando el contenedor se ejecute
   CMD ["nginx", "-g", "daemon off;"]