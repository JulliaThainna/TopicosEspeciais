let http = require("http");
let server = http.createServer(function (request, response) {
  console.log("Entrou em create server");
  let solicitedUrl = request.url;
  console.log("URL: " + solicitedUrl);
  if (solicitedUrl == "/cadastracliente") {
    response.end(
      "<html><head><title>Pagina Inicial</title></head><body><h1>Cadastro de clientes</h1></body></html>"
    );
  } else if (solicitedUrl == "/cadastrafornecedor") {
    response.end(
      "<html><head><title>Pagina Inicial</title></head><body><h1>Cadastro de fornecedores</h1></body></html>"
    );
  } else if (solicitedUrl == "/index") {
    response.end(
      "<html><head><title>Pagina Inicial</title></head><body><h1>Index Teste/h1></body></html>"
    );
  } else {
    response.end(
      "<html><head><title>Pagina Inicial</title></head><body><h1>Pagina Inicial do sistema</h1></body></html>"
    );
  }
});

server.listen(3000);
