describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/hotel-miranda-dashboard/login')
    cy.get('[data-cy="btn-login"]').click()
    // cy.get('[data-cy="btn-logout"]').click()
  })
  
  it('Testing incorrect inputs', () => {
  cy.visit('http://localhost:3000/hotel-miranda-dashboard/login')
  cy.get('[data-cy="input-email"]').type ('usuario2@2.com')
  // cy.get('[data-cy="input-email"]').should('have.value', 'usuario2@2.com')
  cy.get('[data-cy="input-pass"]').type ('222',{ force: true })
  cy.get('[data-cy="btn-login"]').click()
  cy.url().should('contain', '/')

})
  it('Testing correct inputs', () => {
  cy.visit('http://localhost:3000/hotel-miranda-dashboard/login')
  cy.get('[data-cy="input-email"]').type ('usuario1@1.com')
  cy.get('[data-cy="input-email"]').should('have.value', 'usuario1@1.com')
  cy.get('[data-cy="input-pass"]').type ('111',{ force: true })
  cy.get('[data-cy="btn-login"]').click()
  cy.url().should('contain', '/')

})

it('Testing logout', () => {
  cy.visit('http://localhost:3000/hotel-miranda-dashboard/login')
  cy.get('[data-cy="input-email"]').type ('usuario1@1.com')
  cy.get('[data-cy="input-pass"]').type ('111',{ force: true })
  cy.get('[data-cy="btn-login"]').click()
  cy.url().should('contain', '/')
  cy.get('[data-cy="btn-logout"]').click()
  cy.url().should('include', 'http://localhost:3000/hotel-miranda-dashboard/login')
})
})

