const quantidadeCriancas: number = 20;
const quantidadePreAdolescentes: number = 10;
const quantidadeTotal: number = 100;

let kids: number = quantidadeCriancas * 100;
let adolecentes: number = quantidadePreAdolescentes * 200;

const total: number = (quantidadeTotal - quantidadeCriancas - quantidadePreAdolescentes) * 300 + kids + adolecentes;

console.log(total);




