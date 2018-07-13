module.exports = function(application, router){

	router.get('/', function(req, res){
		application.app.controllers.carro.all(application, req, res);
	});

	router.post('/', function(req, res){
		application.app.controllers.carro.register(application, req, res);
	});

	router.delete('/:id', function(req, res){
		application.app.controllers.carro.remover(application, req, res);
	});

	router.put('/:id', function(req, res){
		application.app.controllers.carro.atualizar(application, req, res);
	});

	application.use('/api/carro', router);
}