/// <reference types="cypress" />

import allBooks from '../requests/GETBooks.request'
import deleteBooks from '../requests/DELETEBooks.request'

describe('Delete Books', () => {
  it('should create and delete one books', () => {
    allBooks().should(allBooks => {
      deleteBooks(allBooks.body[0].id).should(deleteBooks => {
        expect(deleteBooks.status).to.be.eq(200)
      })
    })
  })
})
