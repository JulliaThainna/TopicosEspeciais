let app = require("./config/server"); 

let rotaHome = require("./routes/home");
rotaHome(app);

let rotaCliente = require("./routes/clientes");
rotaCliente.getClientesAPI(app);
rotaCliente.createClienteAPI(app);

//TODA ROTA PRECISA SER CADASTRADA

app.listen(8000, function(){
    console.log("Servidor iniciado na porta 8000.");
});