# Playing around with Docker + Node.js + Express
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/n3rdyguy/node_with_express/edit/master/)
## To run this type
```
docker build -t node-express-api:latest .
docker run --name user-api -d -p 3000:3000 node-express-api:latest
```
**Then go to**
http://localhost:3000/

## Cleanup
```
docker stop user-api
docker rm user-api
docker rmi node-express-api:latest
```
