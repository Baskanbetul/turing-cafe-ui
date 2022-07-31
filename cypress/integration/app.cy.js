  describe('App', () => {
  beforeEach('The user should see the main page', () => {
    cy.intercept('http://localhost:3001/api/v1/reservations', {fixture : 'reservationData.json'}); //why it is object
    cy.visit('http://localhost:3000/')
  })

  it('should be able to visit the url', () => {
    cy.url().should('eq' , 'http://localhost:3000/');
  })

  it('Should have a title-header', () => {
    cy.get('h1').contains('Turing Cafe Reservations').should('be.visible');
  })
  
  it('Should have a make reservation button', () => {
		cy.get('button').contains('Make Reservation').should('be.visible');
	});

	// it("Should be able to display a card's name,date,time and number", () => {
	// 	cy.get('.reservation-container').contains('Christie').should('be.visible');
	// 	cy.get('.reservation-container').contains('12/29');
	// 	cy.get('.reservation-container').contains('7:00');
	// 	cy.get('.reservation-container').contains('12');
	// });

    it('Should be able to display all reservations', () => {
      // cy.get('.reservation-container').find('.card').should('have.length', '0');
      cy.get('.card').eq(0).contains('Christie');
			cy.get('.card').should('have.length', 2);
    })
    // it('Should add new reservation after click make reservation button', () => {
    //   cy.get('.reservation-container').find('.card').should('have.length', '0');
    // })

    it('Should have reservation form', () => {
      // cy.get([(placeholder = 'Name')]).eq(0).contains()
      cy.get('form').within(() => {
      cy.get('input').eq(0).type("Christie")
      cy.get('input').eq(1).type('12/29')
      cy.get('input').eq(2).type('7:00')
      cy.get('input').eq(3).type(12)
      cy.get('button').click()
    })
    cy.contains('Christie');
  })


    })
