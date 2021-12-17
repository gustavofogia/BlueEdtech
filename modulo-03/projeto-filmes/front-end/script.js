const apiUrl = "http://localhost:3000";
let modoEdicao = false;
let idEdicao = 0;

const lista = document.getElementById("lista");

const getFilmes = async () => {
    const response = await fetch(`${apiUrl}/filmes`);
    const filmes = await response.json();

    filmes.map((filme) => {
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
    const nota = document.getElementById('nota');

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

