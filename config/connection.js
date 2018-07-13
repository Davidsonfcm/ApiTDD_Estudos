var connMongoDB = function(mongoose, callback) {

	const uri = "mongodb://localhost:27017/agencia_veicular"
	const options = {
		useNewUrlParser: true
	}

	mongoose.connection.on('connected', function () {  
	  console.log('Conexão ao banco aberta');
	}); 

	mongoose.connection.on('error',function (err) {  
	  console.log('Ocorreu um erro em sua conexão com o mongoDB :' + err);
	}); 

	mongoose.connection.on('disconnected', function () {  
	  console.log('Conexão ao banco fechada'); 
	});

	return mongoose.connect(uri, options, callback);
}

module.exports = function(mongoose){
	return connMongoDB;
}

