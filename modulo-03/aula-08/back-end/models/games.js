//importar o mongoose - ferramenta que auxilia no desenvolvimento com banco de dados mongoBD.
const mongoose = require('mongoose');

// Schemas --> é a estrutura de dados do documento('linha tabela') que é aplicado por meio da camada de aplicativo
// Documents --> sao como se fosse as linhas da nossa tabela .
// Model --> São construtores que pegam um schema e cria uma instancia de um documento equivalente a um registro em um banco de dados relacional.
// Collections --> são equivalentes as tabelas no banco de dados e elas podem conter varios documentos JSON.


// construindo o model com as estrutura de dados pre definidas
const gamesModel = new mongoose.Schema({
  nome: { type: String, required: true},
  nota: { type: Number, required: true},
  plataforma: { type: String, required: true},
  valor: {type: String, required: true},
  anoLancamento: {type: String, required: true},
  dataCriacao: { type: Date, default: Date.now }
})


// inicializar o model na nossa collection com o schemma gamesModel
const Game = mongoose.model('games', gamesModel);

// exporto o modulo para que ele possa usar as funcoes do banco de dados.
module.exports = Game;