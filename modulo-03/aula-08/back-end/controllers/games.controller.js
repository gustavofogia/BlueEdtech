// importo o service para poder ter acesso as funções que cuidam dos dados
const mongoose = require('mongoose');
const gamesService = require("../services/games.service");

// vai retornar uma lista de games pré cadastrados para o frontend
const getGames = async (req, res) => {
  const games = await gamesService.getGames();
  // recebemos os jogos encontrados pelo servico via banco de dadados (atravez do model)
  // enviamos como resposta para o front-end
  res.send(games);
}

// recebe um id via parametro da requisicao e busca um game no banco de dados
const getGameById = async (req, res) => {
  // acesso o id via parametro da requisicao
  const id = req.params.id;

  // verifica se o id recebido via parametro é um id valido no padrao do banco de dados.
  if(!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).send({message: 'Id Invalido, porfavor verifique as informações.'})
    return
  }

  // chamo a funcao do servico passando o id recolhido via parametro
  const game = await gamesService.getGameById(id);
  
  // verifica se encontrou um filme no banco de acordo com o id caso nao encontrar retorna erro.
  if(!game) {
    res.status(404).send({message: 'Filme nao encontrado'});
    return;
  }

  res.send(game);
}

// funcao que recebe um objeto via requisicao(front-end) e envia para ser cadastrado no banco de dados
const createGame = async (req, res) => {
  // acessar o objeto no body vindo do front-end
  const game = req.body;

  await gamesService.createGame(game)
  .then(() => {
    res.send({message: `Game ${game.nome} cadastrado com sucesso!`})
  })
  .catch((err) => {
    res.status(500).send({message: `Erro no servidor: ${err}`});
  })
}

// recebe um objeto via body e um id via parametro e envia para o banco de dados para ser atualizado 
const editGame = async (req, res) => {
  // acesso o id do parametro via requisicao
  const id = req.params.id;
  // acesso o objeto do game no corpo da requisicao
  const gameEdit = req.body;

  // chamo a funcao do servico passando o id para ser editado e o objeto com os novos valores
  await gamesService.editGame(id, gameEdit)
  .then(() => res.send({message: 'Filme Editado com sucesso'}))
  .catch(err => res.status(500).send({message: `Erro no servidor: ${err}`}))
}

// recebe um id via parametro da requiscao e envia para o servico para ser excluido do banco de dados
const deleteGame = async (req, res) => {
  const id = req.params.id;

  await gamesService.deleteGame(id)
  .then(() => res.send({message: 'Game excluido com sucesso'}))
  .catch((err) => res.status(500).send({message: `Erro no servidor: ${err}`}))

}


module.exports = {
  getGames,
  getGameById,
  createGame,
  editGame,
  deleteGame
}