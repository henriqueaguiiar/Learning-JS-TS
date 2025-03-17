"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculaPotencia = (base, expoente) => {
    return Math.pow(base, expoente);
};
let base = 2;
let expoente = 3;
let resultadoPotencia = calculaPotencia(base, expoente);
console.log(`O resultado da potência é: ${resultadoPotencia}`);
