const el = require('./elements').ELEMENTS;

class CadastroBank {

    acessarPaginaCadastro() {

        cy.visit('http://localhost:3000/');
        cy.get(el.btnCadastro).click();

    }
}

export default new CadastroBank();