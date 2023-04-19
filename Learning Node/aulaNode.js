console.log("Entrou no console.log");

let var1 = 15;
let var2 = 10;
console.log("Soma das variáveis: (somando direto)" + (var1 + var2));

function soma(v1, v2){
    return v1 + v2;
}
console.log("Soma das variáveis (function): " + soma(var1, var2));

let somar = (v1, v2) => v1 + v2;
console.log("Soma das variáveis (arrow function): " + somar(var1, var2));
