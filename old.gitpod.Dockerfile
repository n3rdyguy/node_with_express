FROM node:current-alpine3.14
WORKDIR /home/gitpod
ADD . .
RUN npm install
CMD node index.js
