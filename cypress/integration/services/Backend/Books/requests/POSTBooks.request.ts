/// <reference types="cypress" />

import allUsers from '../../Users/requests/GETUsers.request'

export default function createBooks(): Cypress.Chainable<Cypress.Response> {
  return allUsers().should(response => {
    cy.request({
      method: 'POST',
      url: '/api/books/postBooks',
      body: {
        title: 'Fogo no mato',
        ownerId: response.body[0].id,
        company: 'Mórula',
        author: 'Luiz Antonio Simas',
        publicationDate: '2016',
        category: 'História e Religião',
        image:
          'http://images-na.ssl-images-amazon.com/images/I/71mf-y5ZcZL.jpg',
        situation: 'Disponível'
      },
      failOnStatusCode: false
    })
  })
}
