/// <reference types="cypress" />

describe('Testing app', () => {
  beforeEach(() => {
    cy.visit('https://app.100xdevs.com')
  })

  it('is able to log in', () => {
    cy.contains('Login').should('exist')
    cy.contains('Login').click()
    cy.contains('Welcome to 100xDevs').should('exist', { timeout: 10000 })
    cy.get('#email').type('sohamnimbalkar07@gmail.com', { force: true });

    // Fill in the password field
    cy.get('#password').type('randompassword');

    cy.get('button').eq(4).click()

    cy.contains('View Course').should("exist", {timeout: 10000})
  })
})
