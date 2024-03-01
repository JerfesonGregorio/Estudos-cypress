import CadastroBank from '../../support/pages/cadastro-bytebank/pagina-cadastro'

describe('Página de usuário', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    });
    
    it('Cadastrando um novo usuário com dados corretos', () => {

        CadastroBank.acessarPaginaCadastro()
        CadastroBank.abrirConta()

    });
});