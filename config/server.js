const express = require('express'),
	body_parser = require('body-parser'),
	express_validator = require('express-validator'),
	consign = require('consign'),
	cors = require('cors'),
	connection = require('./connection'),
	mongoose = require('mongoose'),
	fs = require('fs'),
	path = require('path'),
	logger = require('morgan');

var app = new express();
var routes = express.Router();

if(process.env.NODE_ENV !== 'Production')
{
	require('dotenv').load();
}

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

var accessLogStream = fs.createWriteStream(path.join(__dirname + '/log', 'access.log'), {flags: 'a'});
app.use(logger('dev', {stream: accessLogStream}));

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