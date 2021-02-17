/// <reference types="cypress" />

export default function editBooks(
  id: number
): Cypress.Chainable<Cypress.Response> {
  return cy.request({
    method: 'PUT',
    url: `/api/books/putBooks?id=${id}`,
    body: {
      title: 'O corpo encantado das ruas',
      company: 'Mórula',
      author: 'Luiz Antonio Simas',
      publicationDate: '2016',
      category: 'História e Religião',
      image: 'https://images-na.ssl-images-amazon.com/images/I/71mf-y5ZcZL.jpg',
      situation: 'Disponível'
    },
    failOnStatusCode: false
  })
}
