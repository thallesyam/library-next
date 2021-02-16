/// <reference types="cypress" />

import payloadAddUsers from '../payloads/add-user.json'

export default function createUsers(): Cypress.Chainable<Cypress.Response> {
  return cy.request({
    method: 'POST',
    url: '/api/postUsers',
    body: payloadAddUsers,
    failOnStatusCode: false
  })
}
