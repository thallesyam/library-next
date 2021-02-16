/// <reference types="cypress" />

import allUsers from '../requests/GETUsers.request'

describe('Get Users', () => {
  it('should get all users', () => {
    allUsers().should(response => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.not.null
    })
  })
})
