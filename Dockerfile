# build stage
FROM node:lts-alpine as build-stage
RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:alpine as production-stage
ENV VUE_APP_BASE_API = 'localhost:3222'
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY docker/nginx/prod.conf /temp/prod.conf
RUN envsubst /app < /temp/prod.conf > /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]