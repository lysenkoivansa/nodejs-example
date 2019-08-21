FROM node:lts-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build:backend 
RUN npm run build:frontend

RUN ls -l
EXPOSE 9000
ENTRYPOINT ["/bin/sh", "/app/nodejs-entrypoint.sh"]
