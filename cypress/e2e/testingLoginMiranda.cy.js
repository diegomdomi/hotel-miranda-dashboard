describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/hotel-miranda-dashboard/login');
    cy.get('[data-cy="btn-login"]').click();
    cy.get('[data-cy="btn-logout"]').click();
  })
})