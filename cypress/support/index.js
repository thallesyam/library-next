// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
before(() => {
  cy.server()
  // cy.createUser()
})

after(() => {
  cy.deleteUser()
})
