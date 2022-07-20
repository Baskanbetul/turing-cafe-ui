  describe('App', () => {
  beforeEach('The user should see the main page', () => {
    cy.visit(`http://localhost:3000/`)
    .contains('Turing Cafe Reservations')
  })
    it('Should have a make reservation button', () => {
      cy.get('button')
    })
    it('Should be able to display all cards', () => {
      cy.get('.reservation-container').find('.card').should('have.length', '0');
    })
    it('Should be able to display a card\'s name,date,time and number', () => {
      cy.get('.reservation-container').contains('Christie').should('be.visible')
      cy.get('.reservation-container').contains('12/29')
      cy.get('.reservation-container').contains('7:00')
      cy.get('.reservation-container').contains('12')
    })
    it('Should add new reservation after click make reservation button', () => {
      cy.get('.reservation-container').find('.card').should('have.length', '0');
    })
})