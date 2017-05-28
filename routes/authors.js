var express = require('express');
var router = express.Router();

var Author = require('../models/author');

// index
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

// new
router.get('/new', function(req, res) {
  res.render('authors/new');
});

// edit
router.get('/:id/edit', function(req,res) {
  Author.findById(req.params.id)
  .exec(function(err, author) {
    if (err) {
      console.log(err);
      return;
    }

    res.render('authors/edit', {
      author: author
    });
  });
});


// show
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
//create
router.post('/', function(req, res) {
  var author = new Author({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    category: req.body.category,
    book_title: req.body.book_title,
    publication_year: req.body.publication_year
  });
  author.save(function(err, author){
    if (err) {
      console.log(err);
      return;
    }

     console.log(author);
    // res.send(author);
    res.render('author/show', {
      author: author
    });
  });
});

// delete author
router.delete('/:id', function(req, res) {
  Author.findByIdAndRemove(req.params.id)
    .exec(function(err, author) {
      if (err) {
        console.log(err);
        return;
      }

      console.log(author);
      //res.send('Author deleted.');
      res.render('authors/delete', {
        author: author
      });
    });
});

// update
router.patch('/:id', function(req, res) {
  Author.findByIdAndUpdate(req.params.id, {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    category: req.body.category,
    book_title: req.body.book_title,
    publication_year: req.body.publication_year
  }, { new: true })
    .exec(function(err, author) {
      if (err) {
        console.log(err);
        return;
      }

      console.log(author);
      // res.send(author);
      res.render('authors/show', {
        author: author
      });
    });
});

module.exports = router;
