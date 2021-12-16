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
                
                </tr>
        
            
            `
        );
    });
};