let palavra: string = "jkknmmnlpppwew";

let verificacao: boolean = false;
const vogais: string[] = ['A', 'E', 'I', 'O', 'U'];

for(let inte: number = 0; inte < palavra.length; inte++){
    if(palavra[inte] == vogais[0].toLowerCase() || palavra[inte] == vogais[1].toLocaleLowerCase() || palavra[inte] == vogais[2].toLocaleLowerCase() || palavra[inte] == vogais[3].toLocaleLowerCase() || palavra[inte] == vogais[4].toLocaleLowerCase()){
       verificacao = true;
    }
}

console.log(verificacao);


