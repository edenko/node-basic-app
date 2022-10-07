<h1 align="center">Node.js with Express & Server</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.5.0-blue.svg?cacheSeconds=2592000" />
  <img alt="License" src="https://img.shields.io/badge/License-MIT-yellow.svg"/>
</p>

Fast, unopinionated, minimalist web framework for node.
This project with node + express + mysql
* GitHub : https://github.com/edenko/node-basic-app


## Project setup
```
npm install
```

## Run
```
node server.js
```
Load `http://localhost:8080` to test the endpoint. It will display a result `listening on 8080`


## Requirements
* node (>= 10.5.0)
* express
* passport
* express-session
* mysql


## App Structure
> _Note: I am mentioning only files/folders which you need to configure if required_
 ```bash
node-express/
node-server/
node-mysql/

 ```


## List of API Endpoints

```sh
+--------+-------------------------+
  Method | URI
+--------+-------------------------+
  GET    | /
  GET    | /login
  POST   | /login
  GET    | /write
  POST   | /add
  GET    | /list
  DELETE | /delete
  GET    | /detail/id
  GET    | /edit/id
  PATCH  | /edit/id
  GET    | /myPage
  GET    | /search
  GET    | /image/:imageName
  GET    | /upload
  POST   | /upload
  GET    | /chat
  POST   | /chat
  POST   | /sendChat
  GET    | /message/:parent
+--------+-------------------------+
```

<!-- ## Screens -->


## Author
👤 **HaYoung Ko**

* Github: [@edenko](https://github.com/edenko)
* email: goodeden3@gmail.com
