describe('Página de cadastro', () => {

    beforeEach(() => {

        cy.visit('http://localhost:4200/#/home')

    });
    it('Registrando um novo usuário de forma incorreta', () => {
        cy.log('Apertando o botão de registro sem os campos preenchidos')
        cy.contains('a', 'Register now').click()
        cy.get('[data-test="btnRegister"]').click()
        cy.get('[data-test="btnRegister"]').click()
        cy.contains('Email is required!').should('be.visible')
        cy.contains('Full name is required!').should('be.visible')
        cy.contains('User name is required!').should('be.visible')
        cy.contains('Password is required!').should('be.visible')

    });
});