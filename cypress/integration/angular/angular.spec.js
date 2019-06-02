/// <reference types="Cypress" />

context('Angular app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('should change the title on button click', () => {
    cy.get('h1').should('have.text', 'Welcome to app!');

    cy.get(':nth-child(17) > :nth-child(1)').click();

    cy.get('.mat-card-content > div > :nth-child(2)').should(
      'have.text',
      '@Input() Name: start_x'
    );

    cy.get('.mat-card-content > div > :nth-child(1)').should('contain', '2019');

    cy.screenshot();
  });
});
