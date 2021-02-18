// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

beforeEach(() => {
  cy.server()
  cy.createUser()
  cy.createBook()
})

afterEach(() => {
  cy.deleteBook()
  cy.deleteUser()
})
