
const notas: number[] = [9, 5, 6, 2, 0, 1];


let contador: number = 0;
for(let i: number = 0; i < notas.length; i++){
    if(notas[i] >= 9 && notas[i] <=10){
        contador++;
    }
}
console.log(contador);