/// <reference types="cypress" />

import postUser from '../requests/POSTUsers.request'

describe('Post Users', () => {
  it('should post user', () => {
    postUser().should(response => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.not.null
      expect(response.body.data.name).to.eq('Julia')
    })
  })
})
