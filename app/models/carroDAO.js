var mongoose = require('mongoose');

var SchemaCarro = new mongoose.Schema({
  ano:  { type: Number},
  nome: { type: String, required: true },
  cor: { type: String, required: true }
});

SchemaCarro.statics.create = function all(carro, callback){
  var Carro = new this(carro);
  Carro.save(carro, callback);
};

SchemaCarro.statics.read = function remove(condition, callback){
  this.model('Carro').find(condition, callback);
};

SchemaCarro.statics.update = function all(id, carro, callback){

  var condition = {
    _id : mongoose.mongo.ObjectId(id)
  };

  var set = {
    $set: {
      ano: carro.ano,
      nome: carro.nome,
      cor: carro.cor
    }
  };

  this.model('Carro').findByIdAndUpdate(condition, set, callback);
};

SchemaCarro.statics.delete = function all(id, callback){
  this.model('Carro').findByIdAndRemove(id, callback);
};

SchemaCarro.pre('save', function(next){
  console.log('antes de salvar');
  next();
});

SchemaCarro.pre('find', function(next){
  console.log('antes de buscar');
  next();
});

module.exports = function(application){
  return application.mongoose.models.Carro || application.mongoose.model('Carro', SchemaCarro);
} 
