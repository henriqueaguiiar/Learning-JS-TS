type Tpessoa = {
    nome: string
    idade: number
    temCNH: boolean
}

const pessoa = {
    nome: 'Henrique',
    idade: 26,
    temCNH: true
}

function apresentacao( pessoa: Tpessoa): void{
     console.log(pessoa);
}

apresentacao(pessoa);