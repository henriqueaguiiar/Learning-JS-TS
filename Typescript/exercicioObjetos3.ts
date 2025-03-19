type Tproduto = {
    nome: string
    preco: number
    quantidade: number
}

type Tcliente = {
    nome: string
    idade: number
    produtos: Tproduto[]
}


const pessoa: Tcliente = {
    nome: 'Henrique',
    idade: 26,
    produtos: [
        {
            nome: 'Notebook',
            preco: 1500.00,
            quantidade: 2
        },
        {
            nome: 'tv',
            preco: 4500.00,
            quantidade: 1
        }
    ]
}

let soma: number = 0;

for(let produto of pessoa.produtos){
    soma += produto.preco * produto.quantidade;
}

console.log(soma/100);
