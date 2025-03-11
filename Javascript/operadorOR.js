"use strict";
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
