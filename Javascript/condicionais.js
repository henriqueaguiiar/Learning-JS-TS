"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const idadeMinima = 18;
let idadeUsuario;
const nomeUsuario = 'Henrique';
function verificaIdade(idade) {
    if (idade >= idadeMinima) {
        console.log(`${nomeUsuario} pode comprar o ingresso. `);
    }
    else {
        console.log(`${nomeUsuario} não pode comprar o ingresso. `);
    }
}
console.log(verificaIdade(15));
