"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}
console.log(soma);
