FROM node:14.15.4-alpine

WORKDIR /usr/src/app

COPY package.json package-lock.json /usr/src/app/

RUN npm install

COPY . /usr/src/app/

CMD [ "node", "index.js" ]