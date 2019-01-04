FROM node:10.14.1

WORKDIR /usr/src
COPY package-lock.json package.json

COPY . .
RUN npm install

EXPOSE $PORT

RUN npm run build

CMD ["npm", "start"]
