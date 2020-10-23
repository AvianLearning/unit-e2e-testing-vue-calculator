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
  });

  it('multiple operations can be chained together', () => {
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator_multiply').click();
    cy.get('#number3').click();
    cy.get('#operator_multiply').click();
    cy.get('#number8').click();
    cy.get('#operator_equals').click();
    cy.get('#operator_subtract').click();
    cy.get('#number9').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '63');
    });
  
  it('should output negative numbers as expected', () => {
    cy.get('#number6').click();
    cy.get('#operator_subtract').click();
    cy.get('#number7').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-1');
  });

  it('should output decimals as expected', () => {
    cy.get('#number8').click();
    cy.get('#operator_divide').click();
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '1.6');
  });

  it('should output very large numbers as expected', () => {
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator_multiply').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '999999998000000000');
  });

  it('should return a string "Error" when dividing by zero', () => {
    cy.get('#number2').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', "Error");
  });

})
