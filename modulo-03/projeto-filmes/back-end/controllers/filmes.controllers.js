
const filmeService = require('../services/filmes.services');

const getFilme = (req, res) => {
    const filmes = filmeService.getFilmesService();
    res.send(filmes);
}

const getFilmesById = (req, res) => {
    const id = req.params.id;
    const filme = filmeService.getFilmesbyIdService(id);
    res.send(vaga)
}

const postFilme = (req, res) => {
    if(!req.body || !req.body.nome || !req.body.img || !req.body.genero || !req.body.nota) {
        res.status(400).send({message: 'Filme Invalido'})
        return
    }
    const filme = req.body;
    const newFilme = filmesService.addFilme(filme);
    if(!newFilme.id) {
        res.status(500).send({message: "Ocorreu um erro ao salvar o filme, tente novamente"})
    }
    res.send({message: `Filme ${ newFilme.nome} do genero ${ newFilme.genero} cadastrado com sucesso`})
}

const putFilme = (req, res) => {
    if(!req.body || !req.body.nome || !req.body.img || !req.body.genero || !req.body.nota) {
        res.status(400).send({message: 'Não foi possivel editar, por favor preencha todos os campos.'})
    }
    
}


