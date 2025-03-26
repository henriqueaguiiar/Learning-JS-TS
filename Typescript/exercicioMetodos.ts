// Declaração de um array chamado 'arrayArquivos' contendo extensões de arquivos como strings.
const arrayArquivos: string[] = ['.txt', '.bat', '.exe', '.xml'];

// Função 'antiVirus' que recebe uma lista de arquivos (um array de strings) como parâmetro.
const antiVirus = (listaArquivos: string[]) => {
    
    // Utiliza o método 'some' para verificar se há algum arquivo com a extensão '.bat'.
    const resultado = listaArquivos.some((item) => {
        // Verifica se o item atual inclui a extensão '.bat'.
        const existeVirus = item.includes('.bat');
        return existeVirus; // Retorna 'true' se encontrar '.bat', caso contrário, 'false'.
    });

    // Se a variável 'resultado' for verdadeira (ou seja, se um vírus for encontrado):
    if(resultado){
        console.log('Virus detectado'); // Exibe a mensagem indicando que um vírus foi detectado.
        return; // Encerra a execução da função.
    } else {
        // Caso contrário (se nenhum vírus for encontrado):
        console.log('Nenhum virus encontrado'); // Exibe a mensagem informando que não há vírus.
    }
}

// Chama a função 'antiVirus', passando o array 'arrayArquivos' como argumento.
antiVirus(arrayArquivos);
