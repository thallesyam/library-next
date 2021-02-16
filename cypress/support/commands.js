import allUsers from '../integration/services/Users/requests/GETUsers.request'
import deleteUsers from '../integration/services/Users/requests/DELETEUsers.request'

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
    url: '/api/postUsers',
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
