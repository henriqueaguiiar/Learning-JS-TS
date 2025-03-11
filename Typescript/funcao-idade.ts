function verificaIdade2(idade: number): void{
    if( idade >= 18){
        console.log('Maior de idade');
    }else{
        console.log('Menor de idade');
    }
}

let idadeVerificar: number = 26;
console.log(verificaIdade2(idadeVerificar));