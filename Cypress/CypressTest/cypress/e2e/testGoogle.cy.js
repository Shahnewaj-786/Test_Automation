describe('verify Google search', () => {
  it('passes', () => {
    cy.visit('https://www.google.com/')
    cy.get('#APjFqb').type("What is cypress")
    cy.get('.CcAdNb').click()
  })
})