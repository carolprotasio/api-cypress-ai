
Cypress.Commands.add('postNewBook', (book) => { 
    cy.api({
        url: '/api/books',
        method: 'POST',
        body: book,
        failOnStatusCode: false,
      }).then(response => {return response })
 })

Cypress.Commands.add('getBookById', (id) => { 
    cy.api({
        url:  `/api/books/${id}`,
        method: 'GET',        
        failOnStatusCode: false,
      }).then(response => {return response })
 })
Cypress.Commands.add('getBooks', () => { 
    cy.api({
        url: '/api/books',
        method: 'GET',        
        failOnStatusCode: false,
      }).then(response => {return response })
 })
 Cypress.Commands.add('deleteBookById', (id) => { 
    cy.api({
        url: `/api/books/${id}`,
        method: 'DELETE',        
        failOnStatusCode: false,
      }).then(response => {return response })
 })