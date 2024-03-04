FROM node:18-alpine

WORKDIR /usr/src/app

COPY ./package.json ./

RUN npm install && npm cache clean --force

COPY . .

EXPOSE 4300

RUN npm run start