var http        = require('http');
const express   = require("express");
var httpProxy   = require('express-http-proxy');
const app       = express();
var cookieParser= require('cookie-parser');
var logger      = require('morgan');
const helmet    = require('helmet');

//Declarando os endpoint das apis
var userServiceProxy      = httpProxy('http://localhost:3001');
var productServiceProxy   = httpProxy('http://localhost:3002');

//Identificando e redirecionando para o proxy de cada api
app.get('/users',(req,resp,next) => {
    userServiceProxy(req,resp,next);
});

app.get('/products',(req,resp,next) => {
    productServiceProxy(req,resp,next);
});

app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

//Inicializando o server para escutar na porta 3000
var server = http.createServer(app);
server.listen(3000);