describe('My Second Test', () => {
  it('Try to visit something', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').wait(3000).click()
    cy.url().should('include', '/commands/actions')
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})