FROM node:18-alpine as build-stage

WORKDIR /app

ENV PATH /node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install

COPY ./ .

RUN npm run build --base=/

FROM nginx:latest as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
