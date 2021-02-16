/// <reference types="cypress" />

import payloadEditUsers from '../payloads/edit-user.json'

export default function editUsers(
  id: number
): Cypress.Chainable<Cypress.Response> {
  return cy.request({
    method: 'PUT',
    url: `/api/users/putUsers?id=${id}`,
    body: payloadEditUsers,
    headers: {
      'Content-Type': 'application/json'
    },
    failOnStatusCode: false
  })
}
