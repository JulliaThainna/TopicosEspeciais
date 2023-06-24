//MODEL (NODEJS) VIEW (EJS) CONTROLLER (EXPRESS -> rotas)
let express = require("express"); //importar um modulo externo - acessando a biblioteca que foi baixada
let app = express();

app.set("view engine", "ejs"); //Configurando o EJS como visualizador padrão
app.use(express.static("views/static")); //Configurando o Express para arquivos estáticos (HTML+CSS)
app.use(express.json()); //Configurando Express para trabalhar com JSONs
app.use(express.urlencoded({extend: true})); //Configurando o Express para receber o HTML como JSON

module.exports = app;


//Arquivo para novas configurações