FROM node:16-buster

WORKDIR /Client/src/app

COPY package*.json ./

RUN npm install

COPY src src

COPY public public

CMD ["npm", "start"]
