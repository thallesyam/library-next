/// <reference types="cypress" />

import postUser from '../requests/POSTUsers.request'

describe('Post Users', () => {
  it('should post user', () => {
    postUser().should(response => {
      cy.log(response.body)
    })
  })
})
