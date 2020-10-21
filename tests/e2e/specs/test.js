// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2');
  });

  it('number buttons should update display', () => {
    cy.get('#number5').click();
    cy.get('#number3').click();
    cy.get('.display').should('contain', '53');
  });

  it('arithmetical operations should update display with calculation result', () => {
    cy.get('#number4').click();
    cy.get('#operator_multiply').click();
    cy.get('#number6').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '24');
  })

})
