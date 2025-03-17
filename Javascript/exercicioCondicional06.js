"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const marcacaoRoleta = 45;
const quantidadeCaixa = 257;
const precoPassagem = 5.70;
let valorEsperado = marcacaoRoleta * precoPassagem;
if (quantidadeCaixa === valorEsperado) {
    console.log(`TUDO CERTO`);
}
else if (quantidadeCaixa > valorEsperado) {
    console.log("DINHEIRO SOBRANDO");
}
else if (quantidadeCaixa < valorEsperado) {
    console.log("DINHEIRO FALTANDO");
}
