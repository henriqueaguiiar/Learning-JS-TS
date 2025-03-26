
let contador: number = 11;

   const id = setInterval(():void => {
    console.log(contador = contador -1);
    if(contador === 0){
        console.log("A bomba explodiu");
        clearInterval(id);
    }
}, 1000);