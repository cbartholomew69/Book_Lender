var express = require('express');
var router = express.Router();

var Author = require('../models/author');

// index authors
router.get('/', function(req, res) {
  // res.send('authors will be here');
  Author.find({})
    .exec(function(err, authors) {
      if (err) {
        console.log(err);
        return;
      }

      console.log(authors);
      // res.send(authors);
      res.render('authors/index', {
          authors: authors
      });
    });
});

// new author
router.get('/new', function(req, res) {
  res.render('authors/new');
});


// show author
router.get('/:id', function(req, res) {
  Author.findById(req.params.id)
    .exec(function(err, author) {
      if (err) {
        console.log(err);
        return;
      }

      console.log(author);
      //res.send(author);
      res.render('authors/show', {
        author: author
      });
    });
});

module.exports = router;
