describe('Página de login', () => {

    beforeEach(() => {

        cy.visit('http://localhost:4200/#/home')

    });
    it('Preenchendo os campos de forma correta', () => {
        cy.login('joao', 'joao1234')
    });
});