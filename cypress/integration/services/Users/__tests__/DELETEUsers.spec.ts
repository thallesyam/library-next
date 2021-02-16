/// <reference types="cypress" />

import allUsers from '../requests/GETUsers.request'
import deleteUsers from '../requests/DELETEUsers.request'

describe('Delete Users', () => {
  it('should delete one users', () => {
    allUsers().should(allUsers => {
      deleteUsers(allUsers.body[0].id).should(deleteUser => {
        expect(deleteUser.status).to.be.eq(200)
      })
    })
  })
})
