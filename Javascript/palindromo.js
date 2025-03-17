"use strict";
//Crie uma função que receba uma string e verifique se é um palíndromo 
// (uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse(). 
// Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.
Object.defineProperty(exports, "__esModule", { value: true });
function palindromo(palavra) {
    let palavraInvertida = palavra.split('').reverse().join('');
    return palavra === palavraInvertida;
}
const palavra = 'radar';
console.log(palindromo(palavra));
