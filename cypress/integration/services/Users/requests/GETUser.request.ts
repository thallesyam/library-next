/// <reference types="cypress" />

export default function oneUser(
  id: number
): Cypress.Chainable<Cypress.Response> {
  return cy.request({
    method: 'GET',
    url: `/api/users/getUsers?id=${id}`,
    failOnStatusCode: false
  })
}
