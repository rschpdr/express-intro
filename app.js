// 1. Importando o objeto Express para uma variável
const express = require("express");

// 2. Instanciando um novo servidor Express
const app = express();

// 3. Configurando a pasta public para servir conteúdo estático (HTML, CSS, Javascript de cliente, imagens, fontes, etc...)
app.use(express.static("public"));

/* 5. Criar uma rota para lidar com requisições do tipo GET que chegarem no endereço 
 /home */
app.get("/home", (request, response) => {
  const htmlFile = `${__dirname}/public/index.html`;

  response.sendFile(htmlFile);
});

// 4. Colocar o servidor instanciado pra escutar requisições HTTP em uma porta específica
app.listen(4000, () => console.log("My first app listening on port 4000! "));
