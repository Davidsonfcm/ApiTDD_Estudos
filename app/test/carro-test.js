const chai = require('chai'),
chaiHttp = require('chai-http'),
server = require('../../app'),
should = chai.should();

chai.use(chaiHttp);

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