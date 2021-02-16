/// <reference types="cypress" />

import putUser from '../requests/PUTUsers.request'
import allUsers from '../requests/GETUsers.request'
import postUsers from '../requests/POSTUsers.request'

describe('Edit Users', () => {
  it('should edit user', () => {
    allUsers().should(resAddUser => {
      putUser(resAddUser.body[0].id).should(editUsers => {
        expect(editUsers.status).to.eq(200)
        expect(editUsers.body).to.be.not.null
        expect(editUsers.body.name).to.eq('Julia Alves')
      })
    })
  })

  it('should create and edit user', () => {
    postUsers().then(resAddUser => {
      putUser(resAddUser.body.data.id).should(editUsers => {
        expect(editUsers.status).to.eq(200)
        expect(editUsers.body).to.be.not.null
        expect(editUsers.body.name).to.eq('Julia Alves')
      })
    })
  })
})
