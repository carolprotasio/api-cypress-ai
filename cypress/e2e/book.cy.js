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

  it('CT-001 POST - should register a new book', function () {
    const book = this.books.create

    cy.postNewBook(book)
      .then(response => {
        cy.log(response.body);
        expect(response.status).eql(201)
        expect(response.body.title).eql(book.title)
        expect(response.body.author).eql(book.author)
      })

  })
  it('CT-002 POST - should not register book with a duplicate title', function () {
    const book = this.books.duplicate

    cy.postNewBook(book)
    cy.postNewBook(book)
      .then(response => {
        expect(response.status).eql(409)
        expect(response.body.erro).eql('O livro já foi cadastrado!')
      })
  })
  it('CT-003 GET - should get all registed books', function () {
    const book1 = this.books.manyBooks[0]
    const book2 = this.books.manyBooks[1]
    const book3 = this.books.manyBooks[2]
    const expectedBooks = [book1, book2, book3]

    cy.postNewBook(book1)
    cy.postNewBook(book2)
    cy.postNewBook(book3)

    cy.getBooks()
      .then(response => {
        expect(response.status).eql(200)

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
  it('CT-004 GET - should get a book by ID', function () {
    const book = this.books.create

    cy.postNewBook(book)
      .then(response => {
        const bookId = response.body._id
        cy.log('ID do livro criado:', bookId);

        cy.getBookById(bookId)
          .then(bookResp => {
            expect(bookResp.status).eql(200)
            expect(bookResp.body._id).to.eq(bookId)

          })
      })

  })
  it('CT-004 DELETE - should delete a book by ID', function () {
    const book = this.books.delete
    

    cy.postNewBook(book)    
      .then(response => {
        const bookId = response.body._id
        cy.log('ID do livro criado:', bookId);

        cy.deleteBookById(bookId)
          .then(response => {
            expect(response.status).to.eql(200)
            expect(response.body.message).to.have.text('Livro removido com sucesso.')

          })
      })
  })

})