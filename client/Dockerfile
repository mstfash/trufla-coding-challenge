FROM node:12.18 as build
WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]