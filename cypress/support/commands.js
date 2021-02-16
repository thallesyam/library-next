import allUsers from '../integration/services/Users/requests/GETUsers.request'
import deleteUsers from '../integration/services/Users/requests/DELETEUsers.request'

import allBooks from '../integration/services/Books/requests/GETBooks.request'
import deleteBooks from '../integration/services/Books/requests/DELETEBooks.request'

// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('createUser', () => {
  cy.request({
    method: 'POST',
    url: '/api/users/postUsers',
    body: {
      name: 'Marcos',
      email: 'marcos@gmail.com',
      phone: '21932245266',
      city: 'Rio de Janeiro',
      uf: 'RJ',
      image:
        'https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    failOnStatusCode: false
  }).then(response => {
    expect(response.body.data.id).is.not.null
    cy.log(response.body.data.id)

    Cypress.env('createUserId', response.body.id)
  })
})

Cypress.Commands.add('deleteUser', () => {
  allUsers().should(allUsers => {
    if (allUsers.body.length >= 1) {
      allUsers.body.map((user, index) => {
        deleteUsers(allUsers.body[index].id).should(deleteUser => {
          expect(deleteUser.status).to.be.eq(200)
        })
      })
    }
  })
})

Cypress.Commands.add('createBook', () => {
  allUsers().should(allUsers => {
    cy.request({
      method: 'POST',
      url: '/api/books/postBooks',
      body: {
        title: 'O guardião da meia noite',
        ownerId: allUsers.body[0].id,
        company: 'Madras',
        author: 'Rubens Saraceni',
        publicationDate: '1998',
        category: 'Religião',
        image:
          'https://images-na.ssl-images-amazon.com/images/I/51WzF2tdI2L._SX349_BO1,204,203,200_.jpg',
        situation: 'Disponível'
      },
      failOnStatusCode: false
    }).then(response => {
      expect(response.body.data.id).is.not.null
      cy.log(response.body.data.id)

      Cypress.env('createBookId', response.body.id)
    })
  })
})

Cypress.Commands.add('deleteBook', () => {
  allBooks().should(allBooks => {
    if (allBooks.body.length >= 1) {
      allBooks.body.map((book, index) => {
        deleteBooks(allBooks.body[index].id).should(deleteBook => {
          expect(deleteBook.status).to.be.eq(200)
        })
      })
    }
  })
})
