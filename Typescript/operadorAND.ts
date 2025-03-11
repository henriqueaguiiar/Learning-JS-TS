const usuarioLogado: boolean = true;
const permissaoAdmin: boolean = false;

if (usuarioLogado && permissaoAdmin) {
    console.log('Usuário logado e é admin');
} else if (!usuarioLogado && !permissaoAdmin) {
    console.log('Não está logado e não é admin');
} else if (!usuarioLogado && permissaoAdmin) {
    console.log('Não está logado e é admin');
} else {
    console.log('Usuário está logado, mas não é admin');
}
