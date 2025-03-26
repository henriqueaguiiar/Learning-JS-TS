

const verificarValidade = (valorLido: number, valoresLidos: number[]): boolean =>{
    
    let valida: boolean = false;

    for(let i: number = 0; i < valoresLidos.length; i++){
        if(valorLido == valoresLidos[i]){
            valida = true;
        }else{
            valida;
        }
    }

    return valida;

}