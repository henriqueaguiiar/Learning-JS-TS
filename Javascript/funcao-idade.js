"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function verificaIdade2(idade) {
    if (idade >= 18) {
        console.log('Maior de idade');
    }
    else {
        console.log('Menor de idade');
    }
}
let idadeVerificar = 26;
console.log(verificaIdade2(idadeVerificar));
