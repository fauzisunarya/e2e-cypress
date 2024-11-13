describe('Visit site sauce', () => {
  it('pass', () => {
    cy.visit(Cypress.env('baseUrlSauce'))
  })
})