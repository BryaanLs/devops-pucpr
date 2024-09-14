FROM node:latest

WORKDIR /app

COPY package*.json ./
COPY . ./

RUN npm install


ENV PORT 8080

EXPOSE 8080

CMD [ "npm", "run", "start", "--", "--port", "8080", "--host" ]