describe('Transações', () => {

    beforeEach(() => {
        cy.visit('https://devfinance-agilizei.netlify.app/#')
    });
    it('testando transação', () => {

        CriarTransacao("mesada", 600)
        CriarTransacao("trabalho", 900)
        CriarTransacao("compra", -300)
        CriarTransacao("sdad", 600)
        CriarTransacao("aqwwr", 900)
        CriarTransacao("affasf", -300)

        cy.get('td.description')
        .contains('compra')
        .nextAll()
        .eq(2)
        .find('img[onClick*=remove]')
        .click()

    });

    
});

function CriarTransacao(descicao, valor) {
    cy.contains('Nova Transação').click()
    cy.get('#description').type(descicao)
    cy.get('#amount').type(valor)
    cy.get('#date').type('2024-02-13') //Formato de data yyyy-mm-dd
    cy.contains('button', 'Salvar').click()
}