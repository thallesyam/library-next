/// <reference types="cypress" />

import postBook from '../requests/POSTBooks.request'

describe('Post Books', () => {
  it('should post book', () => {
    postBook().should(response => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.not.null
      expect(response.body.data.title).to.eq('Fogo no mato')
    })
  })
})
