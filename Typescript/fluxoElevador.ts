let botoesApertados: string[] = ["A1", "A2", "E", "A1", "A2", "A2", "A1", "A1"];

let contador1: number = 0;
let contador2: number = 0;

for(let botoes of botoesApertados){
    if(botoes == "A1"){
        contador1++;
    }else if(botoes == "A2"){
        contador2++;
    }
}

    if(contador1 > contador2){
        console.log("NERD");
    }else if(contador2 > contador1){
        console.log("ATLETA");
    }else{
        console.log("DIVERSIFICADO");
    }