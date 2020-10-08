FROM node:10-alpine
WORKDIR /usr/src/app
COPY . .

ENV HOST 0.0.0.0

CMD ["nuxt", "start"]
