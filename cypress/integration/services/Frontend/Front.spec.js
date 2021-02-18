describe('Register', () => {
  it('should register one user', () => {
    cy.visit('http://localhost:3000/register')

    cy.get(':nth-child(1) > input').type(
      'https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    )
    cy.get(':nth-child(2) > input').type('Thalles Angelo')
    cy.get(':nth-child(3) > input').type('thallesangelo@gmail.com.br')
    cy.get(':nth-child(4) > input').type('1234')
    cy.get(':nth-child(5) > input').type('11932245266')
    cy.get('[placeholder="Digite sua cidade"]').type('São Paulo')
    cy.get('[placeholder="UF"]').type('SP')

    cy.route('POST', '/users/postUsers').as('postUser')

    cy.get('[data-cy=submit]').click()
  })

  it('should be able to login and createBook', () => {
    cy.visit('http://localhost:3000')
    cy.get('input').type(Cypress.env('createUserId'))
    cy.get('button').click()

    localStorage.setItem('userId', Cypress.env('@createUserId'))

    cy.get('.Books__ButtonsContainer-sc-175qbeh-3 > :nth-child(1)').click()

    cy.get('[placeholder="Título do livro"]').type('Thalles Angelo Teste')
    cy.get('[placeholder="Autor do livro"]').type('Thalles ')
    cy.get('[placeholder="Categoria do livro"]').type('geografia teste')
    cy.get('[placeholder="Editora"]').type('11932245266')
    cy.get('[placeholder="Ano de publicação"]').type('1800')
    cy.get('[placeholder="Imagem do Livro"]').type('imagem teste')
    cy.get('[placeholder="Situação do Livro"]').type('Dis')

    cy.get('form > button').click()
    cy.get('.Books__Btn-sc-175qbeh-6 > a').click()
  })
})
