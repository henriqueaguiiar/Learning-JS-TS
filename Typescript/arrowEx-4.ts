
type Tpessoa = {
    nome: string
    numeroCartela: number
}
const verificarPremiado = (numeroSorteado: number, pessoasConcorrendo: Tpessoa[]): string | undefined => {

    for(let i: number = 0; i < pessoasConcorrendo.length; i++){
        let pessoa: Tpessoa = pessoasConcorrendo[i];
        if(numeroSorteado === pessoa.numeroCartela){
            const {nome} = pessoa; 
            return nome;
        }
    }

    return undefined

}
