let mysql = require("mysql");

module.exports = function(){
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        port: 3306,
        password: "123",
        database: "topicos"
    });
}   

//CRUD -> R (GET)