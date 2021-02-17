/// <reference types="cypress" />

export default function oneBook(
  id: number
): Cypress.Chainable<Cypress.Response> {
  return cy.request({
    method: 'GET',
    url: `/api/books/getBooks?id=${id}`,
    failOnStatusCode: false
  })
}
