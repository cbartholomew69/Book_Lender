var express = require('express');
var router = express.Router();

var Book = require('../models/book');

// index books
router.get('/', function(req, res) {
    // res.send('books will be here');
    Book.find({})
        .exec(function(err, books) {
            if(err) console.log(err);

            console.log(books);
            // res.send(books);
            res.render('books/index', {
                  books: books
            });
        });
});

// new book
router.get('/new', function(req, res) {
    res.render('books/new');
});

// create book
router.post('/', function(req, res) {
    var book = new Book({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        book_title: req.body.book_title,
        category: req.body.category,
        borrower_name: req.body.borrower_name,
        is_borrowed: req.body.is_borrowed,
    });
    book.save(function(err, book){
        if (err) {
          console.log(err);
          return;
      }

        console.log(book);
        // res.send(book);
        res.render('books/show', {
            book: book
        });
    });
});

// show book
router.get('/:id', function(req, res) {
    Book.findById(req.params.id)
        .exec(function(err, book) {
            if(err) {
              console.log(err);
              return;
            }

            console.log(book);
            // res.send(book);
            res.render('books/show', {
                book: book
            });
        });
});

// edit book
router.get('/:id/edit', function(req,res) {
    Book.findById(req.params.id)
    .exec(function(err, book) {
        if (err) {
          console.log(err);
          return;
      }

        res.render('books/edit', {
            book: book
        });
    });
});

// update book
router.patch('/:id', function(req, res) {
    Book.findByIdAndUpdate(req.params.id, {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        category: req.body.category,
        book_title: req.body.book_title,
        borrower_name: req.body.borrower_name,
        is_borrowed: req.body.is_borrowed
    }, {new: true})
        .exec(function(err, book) {
            if (err) {
              console.log(err);
              return;
          }

            console.log(book);
            // res.send(book);
            res.render('books/show', {
                book: book
            });
        });
});

// delete book
router.delete('/:id', function(req, res) {
    Book.findByIdAndRemove(req.params.id)
        .exec(function(err, book) {
            if (err) { console.log(err);
              return;
            }

            console.log('Book deleted.');
            // res.send('Author deleted.');
            // redirect back to the index route
            res.redirect('/books');
        });
});

module.exports = router;


