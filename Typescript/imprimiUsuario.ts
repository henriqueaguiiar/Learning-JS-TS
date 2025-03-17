
let listaDeUsuarios: string[] = ['Henrique', 'Daniel', 'Rodrigo', 'João', 'Matheus'];
let mensagem: string = "Não Encontrado";

for(let i: number = 0; i < listaDeUsuarios.length; i++){
    if(listaDeUsuarios[i] === 'João'){
        mensagem ='Encontrado';
        break
    }
}
console.log(mensagem);
    

/*
let listaDeUsuarios2: string[] = ['Henrique', 'Daniel', 'Rodrigo', 'João', 'Matheus'];
let mensagem: boolean = "false";

for(usuario of listaDeUsuarios2){
    if(usuario === "João"){
        mensagem = true;
        break;
    }
}
    
if(mensagem){
    console.log("Encontrado");
}else{
    console.log("Não Encontrado");
}
*/