import CadastroBank from '../../support/pages/cadastro-bytebank/pagina-cadastro'

describe('Página de usuário', () => {
    
    it('Cadastrando um novo usuário com dados corretos', () => {

        CadastroBank.acessarPaginaCadastro()
        CadastroBank.abrirConta()

    });
});