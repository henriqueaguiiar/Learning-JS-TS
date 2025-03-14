
const marcacaoRoleta: number = 45;
const quantidadeCaixa: number = 257;
const precoPassagem: number = 5.70;

let valorEsperado: number = marcacaoRoleta * precoPassagem;

if(quantidadeCaixa === valorEsperado){
    console.log(`TUDO CERTO`);
}else if(quantidadeCaixa > valorEsperado){
    console.log("DINHEIRO SOBRANDO");
}else if(quantidadeCaixa < valorEsperado){
    console.log("DINHEIRO FALTANDO");
}

   
  
    