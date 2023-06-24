module.exports = function(express){
    express.get("/", function(request, response){
        response.render("pages/home/index");
    }); //toda requisição que for feita via get e for pra Home vai fazer tal coisa
}