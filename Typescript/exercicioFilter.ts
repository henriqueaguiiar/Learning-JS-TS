

const professores = [
{nome: 'davi', stack: 'frontend'},
{nome: 'Henrique', stack: 'backend'},
{nome: 'julia', stack: 'frontend'},
{nome: 'daniel', stack: 'backend'},
{nome: 'martin', stack: 'backend'},
{nome: 'lano', stack: 'frontend'},
]


const frontendProfessores = professores.filter((professor) => {
    return professor.stack.toLowerCase() == 'frontend';
})

console.log(frontendProfessores);


const backendProfessores = professores.filter((professor) => {
    return professor.stack.toLowerCase() == 'backend';
})

console.log(backendProfessores);


