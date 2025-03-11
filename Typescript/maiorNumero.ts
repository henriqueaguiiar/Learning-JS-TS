let a: number = 0;
let b: number = 0;
let c: number = 0;



function determinaMaior(a: number, b: number, c: number): number {
    let maiorNumero: number;

    if(a > b && a > c){
        maiorNumero = a;
    } else if(b > a && b > c){
        maiorNumero = b;
    } else {
        maiorNumero = c;
    }
    return maiorNumero;
}

let resultadoFuncao = determinaMaior(10, 20, 30);

console.log(`O maior número é: ${resultadoFuncao}`);
