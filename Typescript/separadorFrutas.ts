const esteira: string[] = ['Uva', 'Acerola', 'Manga', 'Pera', 'Caju', 'Caju', 'Banana', 'Uva', 'Laranja', 'Maracuja', 'Melancia'];

let contador = 0;

for(let i = 0; i < esteira.length; i++){
    if(esteira[i] == "Banana"){
        contador++;        
    }
}

console.log(contador);