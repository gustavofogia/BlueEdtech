//importação das bibliotecas
const express = require('express');
const cors = require('cors');

//inicializo o express
const app = express();

//declaro os middleware
app.use(express.json());
app.use(cors());

//defino a porta que inicializo o servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor inicializado na porta ${port}`)
});