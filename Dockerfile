FROM node:12.16.3
RUN mkdir -p /usr/src/backend
WORKDIR /usr/src/backend
COPY package*.json ./
RUN npm install
RUN npm install -g nodemon
COPY . .
EXPOSE 5000
CMD ["nodemon", "app.js"]
