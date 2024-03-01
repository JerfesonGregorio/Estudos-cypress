import LoginBank from '../../support/pages/login-bytebank/pagina-login'

beforeEach(() => {
    cy.visit('http://localhost:3000/')
});

it('acessando conta cadastrada', () => {
    
    LoginBank.acessarPaginaLogin()
    LoginBank.acessarConta()

});





