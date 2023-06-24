let bd = require("../config/dbConnection")();

module.exports.getClientesAPI = function(app){
    app.get("/clientes", function(req, res){

        bd.query("select * from clientes;", function(erro, result){
            if(erro){
                console.log("erro: " + erro);
            }
            res.json(result);
        });
    });
}

module.exports.createClienteAPI = function (app){
    app.post("/clientes", function(req, res){ //req -> cliente / res -> server
        const {razaosocial, cnpj, limite_credito} = req.body;
        console.log(razaosocial + "-" + cnpj);
        const data = [razaosocial, cnpj, limite_credito];
        
        bd.query("insert into clientes(nome, cnpj, limite_credito) values(?, ?, ?);", data, function(erro, result){
            //ordem erro result sempre
            if(erro) console.log("erro: " + erro);
            res.status(201).json({message: "ok"});
        }); //tem que ser igual ao bd
    })
}

//CREATE -> POST
//No trabalho da juliana a parte do postman/acesso pelo chrome, será feito pela aplicação frontend que nós desenvolveremos