let myModule = {}; //Definição de um objeto que tem 3 propriedades myVar, myFunction, SomaValores
myModule.myVar = 783;
myModule.myFuntion = function(){
    console.log("Enter on myFunction");
}

myModule.somaValores = (v1, v2) => v1 + v2;

module.exports = myModule;