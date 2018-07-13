module.exports.all = function(application, req, res){

	application.mongoConnection(application.mongoose, function(err, db){
		db.models.Carro.read({}, function (err, collection) {
			if (err) return console.error(err);

			res.status(200).json(collection);

			application.mongoose.disconnect();
		});
	});

}

module.exports.register = function(application, req, res){

	var carro = req.body;

	application.mongoConnection(application.mongoose, function(err, db){
		db.models.Carro.add(carro, function (err, collection) {
			if (err) return console.error(err);

			res.status(200).json(collection);

			application.mongoose.connection.close();
		});
	});

}

module.exports.remover = function(application, req, res){

	var id = req.params.id;

	application.mongoConnection(application.mongoose, function(err, db){
		db.models.Carro.delete(id, function (err, collection) {
			if (err) return console.error(err);

			res.status(200).json(collection);

			application.mongoose.connection.close();
		});
	});
}

module.exports.atualizar = function(application, req, res){

	var _id = req.params.id;
	var carro = req.body;

	application.mongoConnection(application.mongoose, function(err, db){
		db.models.Carro.update(_id, carro, function (err, collection) {
			if (err) return console.error(err);

			res.status(200).json(collection);

			application.mongoose.connection.close();
		});
	});
}