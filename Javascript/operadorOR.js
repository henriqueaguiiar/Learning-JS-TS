"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const maiorDeIdade = true;
const possuiCarteiraDeMotorista = false;
let messagem;
if (maiorDeIdade || possuiCarteiraDeMotorista) {
    messagem = 'Você pode dirigir';
}
else {
    messagem = 'Você não pode dirigir';
}
console.log(messagem);
