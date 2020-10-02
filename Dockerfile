FROM node:10-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm ci

ENV HOST 0.0.0.0

CMD ["npm", "start"]
