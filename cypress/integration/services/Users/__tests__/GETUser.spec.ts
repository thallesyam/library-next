/// <reference types="cypress" />

import oneUser from '../requests/GETUser.request'
import allUsers from '../requests/GETUsers.request'

describe('Get Books', () => {
  it('should get all books', () => {
    allUsers().should(response => {
      oneUser(response.body[0].id).should(book => {
        expect(book.status).to.eq(200)
        expect(book.body).to.be.not.null
        expect(book.body[0].name).to.eq('Marcos')
      })
    })
  })
})
