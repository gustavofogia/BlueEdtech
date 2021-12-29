// importar o express
const express = require('express');
const gamesController = require('./../controllers/games.controller')

// inicializar o modulo de rotas
const router = express.Router();

//[ENDPOINTS]
// [GET] /games - Retorna uma lista de jogos pré cadastrados no banco
router.get('/', gamesController.getGames);

//[GET] /games/{id} - retorna um game de acordo com o seu id
router.get('/:id', gamesController.getGameById);

// [POST] /games/add - Cadastra um novo jogo no banco de dados
router.post('/add', gamesController.createGame);

// [PUT] /games/edit/{id} - Edita os dados do game de acordo com o id e o objeto recebido
router.put('/edit/:id', gamesController.editGame);

// [DELETE] /games/delete - Exclui um game do banco de dados de acordo com o seu id
router.delete('/delete/:id', gamesController.deleteGame);

//exportamos o modulo de rotas
module.exports = router;