# Usar una imagen oficial de Node.js
FROM node:16

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar el package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar todo el código fuente al contenedor
COPY . .

# Exponer el puerto en el que se ejecutará la app
EXPOSE 4000

# Comando para ejecutar el servidor
CMD ["npm", "start"]
