const chai = require('chai'),
chaiHttp = require('chai-http'),
server = require('../../app'),
should = chai.should();

chai.use(chaiHttp);

describe('/POST Carro', () => {
	it('Cadastrando carro', (done) => {

		const carro = {
			ano: 2012,
			nome: 'Astra',
			cor: 'cinza'
		};

		chai.request(server)
		.post('/api/carro')
		.send(carro)
		.end((err, res) => {
			res.should.have.status(200);
			res.body.should.be.a('object');
			done();
		});
	});
});


describe('/GET Carro', () => {
	it('Buscando todos os carros', (done) => {
		chai.request(server)
		.get('/api/carro')
		.end((err, res) => {
			res.should.have.status(200);
			res.body.should.be.a('array');
				//res.body.length.should.be.eql(0);
				done();
			});
	});
});