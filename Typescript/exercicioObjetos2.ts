
type Tpessoa = {
    nome: string
    senha: number
}

const fila: string[] = ['Guido', 'Henrique', 'João', 'Maria'];

const pessoa: Tpessoa[] = [];

for(let i: number = 0; i < fila.length; i++){
    pessoa[i] = {
        nome: fila[i],
        senha: i + 1
    }
}
console.log(pessoa);