const { getFilmesById } = require("../back-end/controllers/filmes.controllers");

const apiUrl = "http://localhost:3000";
let modoEdicao = false;
let idEdicao = 0;

const lista = document.getElementById("lista");

const getFilmes = async () => {
    const response = await fetch(`${apiUrl}/filmes`);
    const filmes = await response.json();

    filmes.map((filme) => {
        console.log(filme.nome);
        lista.insertAdjacentHTML(
            "beforeend",
            `
                <tr>
                    <th>${filme.id}</th>
                    <td>${filme.img}</td>
                    <td>${filme.nome}</td>
                    <td>${filme.genero}</td>
                    <td>${filme.nota}</td>
                    <td>
                        <button class="" onclick="editaFilme(${filme.id})"></button>
                        <button class="" onclick="deletaFilme(${filme.id})></button>
                    </td>
                </tr>
            `
        );
    });
};

getFilmes();

const escolherFilme = async () => {
    const idDigitado = document.getElementById("idFilme").value;
    const response = await fetch(`${apiUrl}/filmes/${idDigitado}`);
    const filme = await response.json();
    document.getElementById("filme").insertAdjacentHTML(
        "beforeend",
        `
            <tr>
                <th>${filme.id}</th>
                <td>${filme.img}</td>
                <td>${filme.nome}</td>
                <td>${filme.genero}</td>
                <td>${filme.nota}</td>
            </tr>
        `
    );
};

const submitForm = async () => {
    const img = document.getElementById('img').value;
    const nome = document.getElementById('nome').value;
    const genero = document.getElementById('genero').value;
    const nota = document.getElementById('nota').value;

    const filme = {
        img,
        nome,
        genero,
        nota
    }

    if(modoEdicao) {
        putFilme(filme);
    }else {
        postFilme(filme);
    }
}

const postFilme = async (filme) => {
    const response = await fetch(`${apiUrl}/filmes/add`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(filme)
    })
    const data = await response.json();
    lista.innerHTML = '';
    getFilmes();
    limpaCampos();
}

const putFilme = async (filme) => {
    const response = await fetch(`${apiUrl}/filmes/edit/${idEdicao}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(filme)
    })
    const data = await response.json();
    lista.innerHTML = '';
    getFilmes();
    limpaCampos();

    modoEdicao = false;
    idEdicao = 0;
}

const editaFilme = async (id) => {

    modoEdicao = true;
    idEdicao = id;

    const filme = await getFilmesById(id);

    document.getElementById('img').value = filme.img;
    document.getElementById('nome').value = filme.nome;
    document.getElementById('genero').value = filme.genero;
    document.getElementById('nota').value = filme.value;
}

const getById = async (id) => {
    const response = await fetch(`${apiUrl}/filmes/${id}`)
    const filme = await response.json();
    return filme
}

const deleteFilme = async (id) => {
    const response = await fetch(`${apiUrl}/filmes/delete/${id}`, {
        method: 'DELETE'
    })
    const result = await response.json();
    alert(result.message);

    lista.innerHTML = '';
    getFilmes();
}

const limpaCampos = () => {
    document.getElementById('img').value = '';
    document.getElementById('nome').value = '';
    document.getElementById('genero').value = '';
    document.getElementById('nota').value = '';
}
