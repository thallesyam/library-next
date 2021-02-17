/// <reference types="cypress" />

export default function allUsers(): Cypress.Chainable<Cypress.Response> {
  return cy.request({
    method: 'GET',
    url: '/api/users/getUsers',
    failOnStatusCode: false
  })
}
