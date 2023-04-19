const mod = require("./callModule.js");

console.log("Enter on module.js");
console.log("Valor da minha variavel: " + mod.myVar);
mod.myFuntion();

let v1 = 256;
let v2 = 512;

let vt = mod.somaValores(v1, v2);
console.log("Valor somado: " + vt);

let callMod = {};
callMod.soma512 = vl1 => mod.somaValores(vl1, v2);

module.exports = mod;