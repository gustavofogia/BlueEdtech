const express = require("express");

const app = express();

const port = 3000;

const blueVagas = [
    {
        id: 1,
        empresa: "Blue",
        salario: 3000,
        oportunidade: "Front-end jr",
        tipo: "CLT"
    },
    {
        id: 2,
        empresa: "Apple",
        salario: 3000,
        oportunidade: "Front-end jr",
        tipo: "CLT"
    },
    {
        id: 3,
        empresa: "Google",
        salario: 3000,
        oportunidade: "Front-end jr",
        tipo: "CLT"
    },
    {
        id: 4,
        empresa: "SpaceX",
        salario: 3000,
        oportunidade: "Front-end jr",
        tipo: "CLT"
    },
];

app.use(express.json());

app.all("/*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
})

app.get("/", (red, res) => {
    res.send("Olá Blumers");
});

app.get("/vagas", (req, res) => {
    res.send(blueVagas);
})

app.get("/vagas/:id", (req, res) => {
    const idParam = req.params.id;
    const vagaEncontrada = blueVagas.find((vaga) => vaga.id == idParam);
    res.send(vagaEcontrada)
})

app.listen(port, () => {
    console.log(`app rodando na porta ${port}`)
});