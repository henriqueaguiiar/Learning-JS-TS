const calculaPotencia = (base: number, expoente: number): number => {
    return Math.pow(base, expoente);
}

let base: number = 2;
let expoente: number = 3;

let resultadoPotencia = calculaPotencia(base, expoente);

console.log(`O resultado da potência é: ${resultadoPotencia}`);