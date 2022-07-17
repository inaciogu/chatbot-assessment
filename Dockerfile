FROM node:alpine

WORKDIR /app

COPY package.json .

EXPOSE 3001

RUN yarn

COPY . .

CMD ["yarn", "start"]