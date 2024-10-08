FROM node:21 AS angular

WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . .
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx 
COPY --from=angular /app/dist /usr/share/nginx/html