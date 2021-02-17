/// <reference types="cypress" />

import oneBook from '../requests/GETBook.request'
import allBooks from '../requests/GETBooks.request'

describe('Get Books', () => {
  it('should get all books', () => {
    allBooks().should(response => {
      oneBook(response.body[0].id).should(book => {
        expect(book.status).to.eq(200)
        expect(book.body).to.be.not.null
        expect(book.body[0].title).to.eq('O guardião da meia noite')
      })
    })
  })
})
