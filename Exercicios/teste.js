let aux = [];
let vet = [1, 2, 3];
for(let i = 0; i < vet.length; i++){
    aux[i] = vet[i] * 3;
}
console.log(aux);


let add = function (x, y){
    return x + y;
}
let addAF = (x, y) => x + y;
console.log(addAF(1, 2));


let vetResult = vet.map(function(x){
    return x * 2;
})
let vetResultAF = vet.map((x) => x * 2);
console.log(vetResultAF);


setTimeout(function(){
    console.log("Waited 1 sec");
}, 1000);
//To arrow function
setTimeout(() => console.log("Waited 1 sec"), 1000);


let saudacao = function(nome){
    console.log("Olá, " + nome + "!");
};
saudacao("Mundo");
//To arrow function
let saudacaoAF = (nome) => console.log("Olá, " + nome + "!");
saudacaoAF("Mundo");


function multiplicador(x){
    return function(y){
        return x * y;
    };
}
let dobro = multiplicador(2);
console.log(dobro(5));
//To arrow function
let multiplicadorAF = (x) => ((y) => x * y);
let dobroAF = multiplicadorAF(2)
console.log(dobroAF(5));