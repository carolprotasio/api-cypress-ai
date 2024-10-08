/// <reference types="cypress" />

describe('/book CRUD', () => {

  beforeEach(function () {
    cy.fixture('books').then(function (books) {
      this.books = books
    })
    cy.dropCollection('books', { database: 'test', failSilently: 'true', timeout: 10000 }).then(result => {
      cy.log(result);
    })
  })

  it('CT-001 should register a new book', function () {
    const book = this.books.create

    cy.postNewBook(book)
      .then(response => {
        cy.log(response.body);
        expect(response.status).eql(201)
        expect(response.body.title).eql(book.title)
        expect(response.body.author).eql(book.author)
      })

  })
  it('CT-002 should not register book with a duplicate title', function() {
    const book = this.books.duplicate

    cy.postNewBook(book)
    cy.postNewBook(book)
      .then(response => {
        expect(response.status).eql(409)
        expect(response.body.erro).eql('O livro já foi cadastrado!')
      })
  })
  it('CT-003 should get all registed books', function() {
    const book1 = this.books.manyBooks[0]
    const book2 = this.books.manyBooks[1]
    const book3 = this.books.manyBooks[2]

    cy.postNewBook(book1) 
    cy.postNewBook(book2)
    cy.postNewBook(book3)  

    const expectedBooks = [book1, book2, book3 ]
    
    cy.getBooks() 
      .then(response => {    

        expectedBooks.forEach((expectedBook) => {
        const foundBook = response.body.find(book => book.title === expectedBook.title);
        expect(foundBook).to.exist; 
        expect(foundBook.author).to.equal(expectedBook.author);
        expect(foundBook.publisher).to.equal(expectedBook.publisher);
        expect(foundBook.year).to.equal(expectedBook.year);
        expect(foundBook.pages).to.equal(expectedBook.pages);
      });
    })
  })

})