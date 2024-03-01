const el = require('./elements').ELEMENTS;
const env = Cypress.env();

class LoginBank {

    acessarPaginaLogin() {

        cy.get(el.btnLogin).click();

    }

    acessarConta() {

        cy.get(el.email).type(env.email);
        cy.get(el.senha).type(env.password);
        cy.get(el.btnAcessar).click();

    }

}

export default new LoginBank();