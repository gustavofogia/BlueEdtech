// conectar com o banco dados
// importar o mongoose (lib responsavel por lidar com o banco de dados mongoDB)
const mongoose = require('mongoose');

// declaro uma funcao para ser a  funcao de conexao
// url da conexao = mongodb://servidor:porta/
// useNewUrlParser = fala pro mongo db trabalhar com o novo sistema de url

const Conn = () => {
  mongoose.connect('mongodb://localhost:27017/loja', {
    useNewUrlParser: true
  }).then(() => {
    console.log('MONGO DB CONECTADO')
  }).catch((err) => {
    return console.log(`Erro na conexao com o banco: ${err}`)
  })
}




// exporto a funcao de conexao
module.exports = Conn;
