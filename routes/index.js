var express = require('express');
var router = express.Router();
var Book = require('../models/book');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Book Lender' });
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

module.exports = router;
