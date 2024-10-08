const express = require('express');
const router = express.Router();
const Book = require('./model');

// Cadastro de livro
router.post('/books', async (req, res) => {
    const { title, author, publisher, year, pages } = req.body;

    if (!title || !author || !publisher || !year || !pages) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }
    const duplicated = await Book.findOne({title: title})

    if(duplicated) {
        return res.status(409).json({ erro: 'O livro já foi cadastrado!'})
    }

    try {
        const book = new Book({ title, author, publisher, year, pages });
        await book.save();
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar o livro.', error });
    }
});

// Listagem de livros
router.get('/books', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar os livros.', error });
    }
});

// Consulta de livro por ID
router.get('/books/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Livro não encontrado.' });
        }
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar o livro.', error });
    }
});
// Atualização de livro
router.put('/books/:id', async (req, res) => {
    const { title, author, publisher, year, pages } = req.body;

    if (!title || !author || !publisher || !year || !pages) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }

    try {
        const book = await Book.findByIdAndUpdate(req.params.id, { title, author, publisher, year, pages }, { new: true });
        if (!book) {
            return res.status(404).json({ message: 'Livro não encontrado.' });
        }
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar o livro.', error });
    }
});


// Remoção de livro
router.delete('/books/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Livro não encontrado.' });
        }
        res.json({ message: 'Livro removido com sucesso.' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao remover o livro.', error });
    }
});

module.exports = router;
