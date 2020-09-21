FROM node:12.18.3

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "start"]