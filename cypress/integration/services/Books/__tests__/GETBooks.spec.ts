/// <reference types="cypress" />

import allBooks from '../requests/GETBooks.request'

describe('Get Books', () => {
  it('should get all books', () => {
    allBooks().should(response => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.not.null
    })
  })
})
