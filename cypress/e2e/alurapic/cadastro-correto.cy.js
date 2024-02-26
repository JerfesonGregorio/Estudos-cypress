import Cadastro from "../support/pages/cadastro/pagina-cadastro";

describe('Página de cadastro', () => {

    beforeEach(() => {

        cy.visit('http://localhost:4200/#/home')

    });
    it('Registrando um novo usuário de forma correta', () => {

        /* cy.log('Preenchendo campos')
        cy.get('[data-test="register"]').click()
        cy.get('[data-test="email"]').type('dddd@example.com')
        cy.get('[data-test="fullName"]').type('dddd ddd dddd')
        cy.get('[data-test="registerUserName"]').type('ddd')
        cy.get('[data-test="registerPassword"]').type('52#asdfsid')
        cy.get('[data-test="btnRegister"]').click() */

        Cadastro.acessarPaginaDeCadastro();
        Cadastro.preencherCamposDoFormulario();
        Cadastro.submeterFormulario()

    });
});