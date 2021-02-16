/// <reference types="cypress" />

export default function deleteUsers(
  id: number
): Cypress.Chainable<Cypress.Response> {
  return cy.request({
    method: 'DELETE',
    url: `/api/users/deleteUsers?id=${id}`,
    failOnStatusCode: false
  })
}
