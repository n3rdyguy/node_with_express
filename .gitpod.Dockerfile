FROM node:current-alpine3.14
WORKDIR /app
ADD . .
RUN npm install
CMD node index.js
