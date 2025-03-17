let palavra: string = 'Paralelepipedo';


let contator: number = 0;

for(let i: number = 0; i < palavra.length; i++){
    if(palavra[i] == 'a'){
        contator++
    }
}

console.log(`A palavra possui ${contator} letras a.`);




/*
let palavra2: string = 'Paralelepipedo';


let contator2: number = 0;

for(letra2 of palavra2){
    if(letra2 == 'a'){
        contador2++
    }
}
    console.log(`A palavra possui ${contator2} letras a.`);

*/