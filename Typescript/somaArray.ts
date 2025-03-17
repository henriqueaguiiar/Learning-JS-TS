

const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let soma: number = 0;

for(let i: number = 0; i < numeros.length; i++){
    soma += numeros[i];
}

console.log(soma);