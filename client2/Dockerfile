FROM node:9-slim

WORKDIR /Client/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]
