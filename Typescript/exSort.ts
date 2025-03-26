

const usuarios = [
    {nome: 'henrique', idade: 26},
    {nome: 'samuel', idade: 23},
    {nome: 'daniel', idade: 18},
    {nome: 'davi', idade: 21},
    {nome: 'joao', idade: 15},
    {nome: 'ana', idade: 30},
];


usuarios.sort((item1, item2)=>{
   if(item1.idade < item2.idade){
    return -1
   }else if(item1.idade > item2.idade){
    return 1
   }else{
    return 0
   }
})

console.log(usuarios);


usuarios.sort((item1, item2)=>{
    if(item1.idade < item2.idade){
     return 1
    }else if(item1.idade > item2.idade){
     return -1
    }else{
     return 0
    }
 })
 
 console.log(usuarios);

 // forma 2 usando subtração

 console.log("-------------------------------")

 
const usuarios2 = [
    {nome: 'henrique', idade: 26},
    {nome: 'samuel', idade: 23},
    {nome: 'daniel', idade: 18},
    {nome: 'davi', idade: 21},
    {nome: 'joao', idade: 15},
    {nome: 'ana', idade: 30},
];

usuarios2.sort((objeto1, objeto2)=>{
    return objeto1.idade -objeto2.idade;
})

console.log(usuarios2)

usuarios2.sort((objeto1, objeto2)=>{
    return objeto2.idade - objeto1.idade;
})

console.log(usuarios2)
