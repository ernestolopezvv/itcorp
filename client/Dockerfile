FROM node

WORKDIR app

COPY --chown=node:node ./package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
