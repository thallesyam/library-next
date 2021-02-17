/// <reference types="cypress" />

export default function allBooks(): Cypress.Chainable<Cypress.Response> {
  return cy.request({
    method: 'GET',
    url: '/api/books/getBooks',
    failOnStatusCode: false
  })
}
