describe('Visit site sauce', () => {
  it('passes', () => {
    cy.visit(Cypress.env('baseUrlSauce'))
  })
})