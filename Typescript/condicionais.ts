const idadeMinima: number = 18;
let idadeUsuario: number;
const nomeUsuario: string = 'Henrique';


function verificaIdade(idade: number): void {
    if (idade >= idadeMinima) {
        console.log(`${nomeUsuario} pode comprar o ingresso. `);
    } else {
        console.log(`${nomeUsuario} não pode comprar o ingresso. `);	
    }
}

console.log(verificaIdade(15));