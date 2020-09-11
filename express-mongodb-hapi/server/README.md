# Express API Starter

Includes API Server utilities:

* [morgan](https://www.npmjs.com/package/morgan)
  * HTTP request logger middleware for node.js
* [helmet](https://www.npmjs.com/package/helmet)
  * Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
* [dotenv](https://www.npmjs.com/package/dotenv)
  * Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`

Development utilities:

* [nodemon](https://www.npmjs.com/package/nodemon)
  * nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
* [eslint](https://www.npmjs.com/package/eslint)
  * ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
* [mocha](https://www.npmjs.com/package/mocha)
  * ☕️ Simple, flexible, fun JavaScript test framework for Node.js & The Browser ☕️
* [supertest](https://www.npmjs.com/package/supertest)
  * HTTP assertions made easy via superagent.

## Setup

```
npm install create-express-api
npm install monk
npm install @hapi/joi

##Configure Mongodb
* Install [MongoDB for windows](https://www.mongodb.com/dr/fastdl.mongodb.org/windows/mongodb-windows-x86_64-4.4.1-signed.msi/download)
* Configure variable system for MONDODB and set localpath to mongod.exe in program files
* Set MongoDB path with command `mongod --dbpath=faqs --port 5000`

## Developer run

```
npm run dev
```

## Test

```
npm run test
```

## Development

```
npm run dev
```
