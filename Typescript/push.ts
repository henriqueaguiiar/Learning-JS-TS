
const arrayNymneros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arrayNymneros.push(10);

console.log(arrayNymneros);

const elementoRemovido = arrayNymneros.pop();

console.log(arrayNymneros);
console.log(elementoRemovido);


const frutas = ["maçã", "banana", "laranja"];

const removido = frutas.shift();
console.log(frutas);   // ["banana", "laranja"]
console.log(removido); // "maçã"


const numeros = [2, 3];

const novoTamanho = numeros.unshift(0, 1);
console.log(numeros);      // [0, 1, 2, 3]
console.log(novoTamanho);  // 4


const letras = ["a", "b", "c", "a"];

console.log(letras.indexOf("a"));      // 0 (primeira ocorrência)
console.log(letras.indexOf("z"));      // -1 (não encontrado)
console.log(letras.indexOf("a", 2));   // 3 (busca a partir do índice 2)


const cores = ["vermelho", "azul", "verde"];

console.log(cores.includes("azul"));   // true
console.log(cores.includes("roxo"));   // false
console.log(cores.includes("verde", 2)); // true (busca a partir do índice 2)


const palavras = ["olá", "mundo"];

console.log(palavras.join());       // "olá,mundo"
console.log(palavras.join(" "));    // "olá mundo"
console.log(palavras.join(" - "));  // "olá - mundo"

