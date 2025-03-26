//Every testa se todos os elementos do array passa pelo teste implementado e retorna true ou false

const numeros: number[] = [2,  4,  6,  8,  10];

const result = numeros.every(function testaArray(elementoArray){
    return elementoArray % 2 == 0;
})

console.log(result);



// Implementação do every
let teste: boolean = true;

function every(item: number): boolean {
    return item % 2 == 0;
}

for (let i: number = 0; i < numeros.length; i++) {
    const resposta: boolean = every(numeros[i]);
    if (!resposta) {
        teste = false;
        break; // Para a execução ao encontrar o primeiro falso
    }
}

console.log(teste); // true (todos os números são pares)