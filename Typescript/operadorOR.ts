const maiorDeIdade = true;
const possuiCarteiraDeMotorista = false;
let messagem: string;

if(maiorDeIdade || possuiCarteiraDeMotorista){
    messagem = 'Você pode dirigir';
}
else{
    messagem = 'Você não pode dirigir';
}

console.log(messagem);

