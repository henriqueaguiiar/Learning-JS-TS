"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuarioLogado = true;
const permissaoAdmin = false;
if (usuarioLogado && permissaoAdmin) {
    console.log('Usuário logado e é admin');
}
else if (!usuarioLogado && !permissaoAdmin) {
    console.log('Não está logado e não é admin');
}
else if (!usuarioLogado && permissaoAdmin) {
    console.log('Não está logado e é admin');
}
else {
    console.log('Usuário está logado, mas não é admin');
}
