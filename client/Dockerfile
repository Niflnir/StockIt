FROM node:alpine

ENV NODE_OPTIONS=--openssl-legacy-provider

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --force

RUN npm install postcss@8 -D --force

COPY . .

EXPOSE 8080

CMD ["npm", "run", "serve", "--", "--port", "3000"]
