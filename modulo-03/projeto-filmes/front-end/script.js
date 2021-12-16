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

