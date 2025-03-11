//Crie uma função que receba uma string e verifique se é um palíndromo 
// (uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse(). 
// Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.


function palindromo(palavra: string): boolean {
    let palavraInvertida: string = palavra.split('').reverse().join('');
    return palavra === palavraInvertida;
}

const palavra: string = 'radar';

console.log(palindromo(palavra));
