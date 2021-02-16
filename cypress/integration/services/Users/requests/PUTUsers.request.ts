/// <reference types="cypress" />

import payloadEditUsers from '../payloads/edit-user.json'

export default function editUsers(): Cypress.Chainable<Cypress.Response> {
  return cy.request({
    method: 'POST',
    url: '/api/putUsers',
    body: payloadEditUsers,
    failOnStatusCode: false
  })
}
