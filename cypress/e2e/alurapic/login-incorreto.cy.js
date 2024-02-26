describe('Página de login', () => {

    beforeEach(() => {

        cy.visit('http://localhost:4200/#/home')

        cy.intercept('Post', 'http://localhost:3000/user/login', {
            statusCode: 400
        }).as('stubPost')

    });
    it('Verificar mensagens de alerta que solicitam nome de usuário e senha', () => {
        cy.log('Apertando o botão de login sem os campos preenchidos')
        cy.contains('User name is required!').should('be.visible')
        cy.contains('Password is required!').should('be.visible')

    });

    it('Deve falhar mesmo com os campos preenchidos corretamente', () => {
        cy.log('Falha esperada')
        cy.login('joao', 'joao1234')
        cy.wait('@stubPost')

    });
});