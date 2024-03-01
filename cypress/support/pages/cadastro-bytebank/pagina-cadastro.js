const el = require('./elements').ELEMENTS;
const env = Cypress.env();

class CadastroBank {

    acessarPaginaCadastro() {

        cy.get(el.btnCadastro).click();

    }

    abrirConta() {

        cy.get(el.nomeCompleto).type(env.userName);
        cy.get(el.email).type(env.email);
        cy.get(el.senha).type(env.password);
        cy.get(el.check).click();
        cy.get(el.submeter).click();
        cy.get(el.mensagemSucesso).contains('Usuário cadastrado com sucesso!').should('be.visible')

    }
}

export default new CadastroBank();