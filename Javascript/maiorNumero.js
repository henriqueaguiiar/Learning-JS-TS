"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a = 0;
let b = 0;
let c = 0;
function determinaMaior(a, b, c) {
    let maiorNumero;
    if (a > b && a > c) {
        maiorNumero = a;
    }
    else if (b > a && b > c) {
        maiorNumero = b;
    }
    else {
        maiorNumero = c;
    }
    return maiorNumero;
}
let resultadoFuncao = determinaMaior(10, 20, 30);
console.log(`O maior número é: ${resultadoFuncao}`);
