# CubeRun

## Features
- Api

## Tech
CubeRun uses a number of open source projects to work properly:
| Name | Document |
| ------ | ------ |
| Nodejs | https://nodejs.org/en/docs |
| Docker | https://docs.docker.com |
| Express | https://expressjs.com/ |

## Installation and Development
CubeRun requires [Node.js](https://nodejs.org/) v16+ to run.
Install the dependencies and devDependencies and start the server.

Node server: 
```sh
cd node-server
npm i
npm run start:dev
```

Service registry: 
```sh
cd service-registry
npm i
npm run start
```
User service: 
```sh
cd user-registry
npm i
npm run start
```

Connect API in host http://localhost:3080/
Following API from file https://cube-vn.backlog.com/file/GROUP3_TRAINING/04.CubeRun/03.Layout/API%20CubeRun.xlsx
## Docker
Run postgres container using for database:
```sh
docker compose up
```
Postgres info in file docker-compose.yml
Create database and table following from file https://cube-vn.backlog.com/file/GROUP3_TRAINING/04.CubeRun/03.Layout/CUBERUN.xlsx
## License
MIT