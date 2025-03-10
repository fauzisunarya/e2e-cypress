describe('Visit site orange', () => {
    it('passes', () => {
      cy.visit(Cypress.env('baseUrlSauce'))
    })
  })