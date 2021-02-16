/// <reference types="cypress" />

import putBook from '../requests/PUTBooks.request'
import allBooks from '../requests/GETBooks.request'
import postBooks from '../requests/POSTBooks.request'

describe('Edit Books', () => {
  it('should edit book', () => {
    allBooks().should(resAddBook => {
      putBook(resAddBook.body[0].id).should(editBooks => {
        expect(editBooks.status).to.eq(200)
        expect(editBooks.body).to.be.not.null
        expect(editBooks.body.title).to.eq('O corpo encantado das ruas')
      })
    })
  })

  it('should create and edit book', () => {
    postBooks().then(resAddBook => {
      putBook(resAddBook.body.data.id).should(editBooks => {
        expect(editBooks.status).to.eq(200)
        expect(editBooks.body).to.be.not.null
        expect(editBooks.body.title).to.eq('O corpo encantado das ruas')
      })
    })
  })
})
