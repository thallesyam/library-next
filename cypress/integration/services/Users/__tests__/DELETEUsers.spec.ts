/// <reference types="cypress" />

import deleteUsers from '../requests/DELETEUsers.request'
import postUsers from '../requests/POSTUsers.request'

describe('Delete Users', () => {
  it('should create and delete one users', () => {
    postUsers().should(reqAddUser => {
      deleteUsers(reqAddUser.body.data.id).should(deleteUser => {
        expect(deleteUser.status).to.be.eq(200)
      })
    })
  })
})
