describe('Página de cadastro', () => {

    beforeEach(() => {
        cy.visit('http://localhost:4200/')
    });

    const usuarios = require('../fixtures/usuario.json')
    
    usuarios.forEach(usuario => {
        it('Registrando corretamente novos usuários', () => {

            cy.register(usuario.email, usuario.fullName, usuario.userName, usuario.password)

        });
    })
    
});