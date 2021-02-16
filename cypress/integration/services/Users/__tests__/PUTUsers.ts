/// <reference types="cypress" />

import putUser from '../requests/PUTUsers.request'

describe('Edit Users', () => {
  it('should edit user', () => {
    putUser().should(response => {
      cy.log(response.body)
    })
  })
})
