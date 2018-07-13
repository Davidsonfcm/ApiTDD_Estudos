const express = require('express'),
	body_parser = require('body-parser'),
	express_validator = require('express-validator'),
	consign = require('consign'),
	cors = require('cors'),
	connection = require('./connection'),
	mongoose = require('mongoose');

var app = new express();
var routes = express.Router();

/*Middlewares*/
app.use(express_validator());
app.use(body_parser.json());
app.use(cors(
	{
	  "origin": "*",
	  "methods": "GET,PUT,POST,DELETE",
	  "preflightContinue": false,
	  "optionsSuccessStatus": 204
	})
);

/*Globalizando o mongoose*/
app.mongoose = mongoose;

/*Conexão com o banco de dado*/
var dbConnection = new connection(app.mongoose);
app.mongoConnection = dbConnection;

consign()
.include('app/models')
.then('app/controllers')
.into(app)
.then('app/routes')
.into(app, routes);

module.exports = app;