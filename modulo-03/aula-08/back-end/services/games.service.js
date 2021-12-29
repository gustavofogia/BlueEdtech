// importar a nossa model para usar as funções do mongo no service
const Game = require("./../models/games");

const getGames = async () => {
  // vai conectar com o banco de dados e retornar a lista de games
  // find = busca dados no banco de dados  de acordo com o filtro, se nao houver filtro, busca todos os dados cadastros
  const games = await Game.find();
  return games;
};

// recebe um id e faz uma busca no banco de dados de acordo com esse id
const getGameById = async (id) => {
  const game = await Game.findById(id)
  return game;
}

// recebe um objeto (JSON) e salva no banco de dados
const createGame = async (game) => {
  // recebe o objeto e envia para ser cadastro no banco atraves do model da funcao create.
  return await Game.create(game)
}

// recebe um Objeto(JSON) e um id e altera os valores de um game no banco de dados
const editGame = async (id, game) => {
  return await Game.findByIdAndUpdate(id, game);
}

// recebe um id e exclui um jogo do banco de dados de acordo com esse id
const deleteGame = async (id) => {
  return await Game.findByIdAndDelete(id);
}


module.exports = {
  getGames,
  getGameById,
  createGame,
  editGame,
  deleteGame
};