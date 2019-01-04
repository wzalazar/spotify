FROM node:10.14.1

WORKDIR /usr/src

COPY package-lock.json package.json
COPY . .

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
