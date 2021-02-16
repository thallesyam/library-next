/// <reference types="cypress" />

export default function deleteBooks(
  id: number
): Cypress.Chainable<Cypress.Response> {
  return cy.request({
    method: 'DELETE',
    url: `/api/books/deleteBooks?id=${id}`,
    failOnStatusCode: false
  })
}
