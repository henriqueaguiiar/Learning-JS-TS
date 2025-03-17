
const notas: number[] = [9, 5, 6, 2, 0];

let contadorPromotores: number = 0;
let contadorDetratores: number = 0;
let contadorNeutros: number = 0;

for(let i: number = 0; i < notas.length; i++ ){
    if(notas[i] >= 9 && notas[i] <= 10){
        contadorPromotores++;
    }else if(notas[i] >= 0 && notas[i] <= 6 ){
        contadorDetratores++;
    }else if(notas[i] >= 7 && notas[i] <= 8){
        contadorNeutros++;
    }
}

let soma: number = contadorPromotores + contadorDetratores + contadorNeutros;

let nps: number = ((contadorPromotores - contadorDetratores) / soma )* 100;

console.log(nps);