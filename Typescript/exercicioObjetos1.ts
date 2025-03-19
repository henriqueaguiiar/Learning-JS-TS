
const pessoa = {
    nome: 'henrique',
    idade: 26,
    altura: 1.70,
    temCNH: 'Possui CNH',
    habilidades: 
    [
        'Java', 
        'Spring', 
        'node'

    ] 
}


console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura} de altura, ${pessoa.temCNH} e as habilidades: 
- ${pessoa.habilidades[0]}
- ${pessoa.habilidades[1]}
- ${pessoa.habilidades[2]}`);
