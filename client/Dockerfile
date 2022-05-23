FROM node

WORKDIR app

COPY ./src ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
