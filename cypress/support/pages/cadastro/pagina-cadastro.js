const eln = require('./elements').ELEMENTS;

class Cadastro {

    acessarPaginaDeCadastro() {
        cy.visit('http://localhost:4200/#/home');
        cy.get(eln.registerNow).click();
    }

    preencherCamposDoFormulario() {
        cy.get(eln.email).type('dddd@example.com');
        cy.get(eln.fullName).type('dddd ddd dddd');
        cy.get(eln.userName).type('ddd');
        cy.get(eln.password).type('52#asdfsid');
    }

    submeterFormulario() {
        cy.get(eln.btnRegister).click();
    }
}

export default new Cadastro();