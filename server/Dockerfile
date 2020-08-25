FROM node:12.18 as build

WORKDIR /usr/src/app

COPY . /usr/src/app
WORKDIR /usr/src/app/server

RUN npm install
RUN npm run build
WORKDIR /usr/src/app/server/dist

CMD [ "npm",  "start" ]