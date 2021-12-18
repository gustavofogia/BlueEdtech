const express = require('express');

const router = express.Router();

const filmesController = require('../controllers/filmes.controllers');

router.get('/', filmesController.getFilmes);

router.get('/:id', filmesController.getFilmesById);

router.post('/add', filmesController.postFilme);

router.put('/edit/:id', filmesController.putFilme);

router.delete('/delete/:id', filmesController.deleteFilme);

module.exports = router;