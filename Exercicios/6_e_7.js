// 6 - Crie um servidor básico usando a biblioteca nativa HTTP que responda na porta 4055.
// 7 - Adicione ao servidor básico criado no passo anterior, um HTML de boas vindas usando o método "end"
let http = require("http");
let server = http.createServer(function (request, response){
    console.log("create server");
    let solicitedUrl = request.url;
    console.log("URL: " + solicitedUrl);
    if(solicitedUrl == '/index'){
        response.end(
            "<html><head><title>Pagina Inicial</title></head><body><h1>Bem vindo(a)!</h1></body></html>"
        );
    }
})

server.listen(4055);