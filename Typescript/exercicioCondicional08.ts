let pontosA: number = 3;
let pontosB: number = 0;


if(pontosA >=25 && pontosA - pontosB >= 2){
    console.log("TIME A VENCEU O SET");
}else if(pontosB >=25 && pontosB - pontosA >=2){
    console.log("TIME B VENCEU O SET");
}else if(pontosA > pontosB ){
    console.log("TIME A VENCENDO");
}else if(pontosB > pontosA){
    console.log("TIME B VENCENDO");
}else{
    console.log("JOGO EMPATADO");
}