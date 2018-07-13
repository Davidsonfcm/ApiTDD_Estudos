const server = require('./config/server');

server.listen(8080, function(){
	console.log('Api online na porta 8080');
});

module.exports = server;