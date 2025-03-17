
let jogadorA: number[] = [1, 4, 5, 8, 15, 14];


let soma: number = 0;
const total: number = 120;

for(let i: number = 0; i < jogadorA.length; i++){
    soma = soma + jogadorA[i];
}

if(soma > total - soma){
    console.log('JOGADOR A GANHOU');
}else if(total - soma > soma){
    console.log('JOGADOR B GANHOU');
}else{
    console.log('EMPATE');
}