// some recebe uma função que testa se pelomenos 1 dos elementos atende acondiçãoconst numeros: number[] = [2,  4,  6,  8,  10];

const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numeros.some(function testaArray(elementoArray){
    return elementoArray % 2 == 0;
})

console.log(result);




const pessoas = [
    {
        nome: 'Henrique',
        idade: 26
    },
    {
        nome: 'João',
        idade: 20
    },
    {
        nome: 'Ana',
        idade: 17
    }
]

const resultado: boolean = pessoas.some(function testaIdade(pessoa){
    return pessoa.idade < 18;
})

console.log(resultado);