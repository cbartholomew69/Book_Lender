var express = require('express');
var router = express.Router();

var Author = require('../models/author');

// index authors
router.get('/', function(req, res) {
  // res.send('authors will be here');
  Author.find({})
  .exec(function(err, author) {
    if(err) {
      console.log(err);
      return;
    }
    //console.log(authors);
    // res.send(authors);
    res.render('authors/index', {
      author: author
    });
  });
});
// new author
router.get('/new', function(req, res) {
  res.render('authors/new');
});
// create author
router.post('/', function(req, res) {
  var newAuthorForm = request.body;
  var author = new Author({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    country: req.body.country,
    book_title: req.body.book_title,
    publication_year: req.body.publication_year,
    category: req.body.category
  });
  author.save(function(err, author) {
    if (err) {
      console.log(err);
      return;
    }
    //console.log(author);
    // res.send(author);
    res.redirect('/authors'); //{
    //  author: author
   // });
  });
});

// show author
router.get('/:id', function(req, res) {
  var authorId = request.params.id;
  Author.findById(authorId)
    .exec(function(err, author) {
      if (err) {
        console.log(err);
        return;
      }
      //console.log(author);
      // res.send(author);
      res.render('authors/show', {
        author: author
      });
    });
});
// edit author
router.get('/edit/:id', function(req,res) {
  var authorId = request.params.id;
  Author.findById(authorId)
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
//update author
router.put('/:id', function(req, res) {
    var authorId = request.params.id;
    var newAuthorInfo = request.body.author;
    Author.findByIdAndUpdate(authorId, newAuthorInfo, {new: true})//{
   //     first_name: req.body.first_name,
   //     last_name: req.body.last_name,
   //     country: req.body.country,
   //     book_title: req.body.book_title,
   //     publication_year: req.body.publication_year,
   //     category: req.body.category
   // }, {new: true})
        .exec(function(err, author) {
            if (err) {
              console.log(err);
              return;
            }

            //console.log(author);
            // res.send(author);
            res.redirect('/authors/' + authorId);
            //    author: author
            });
        });
// delete author
router.get('/delete/:id', function(req, res) {
    var authorId = request.params.id;
    Author.findByIdAndRemove(authorId)
        .exec(function(err, author) {
            if (err) {
              console.log(err);
              return;
            }
            //console.log('Author deleted.');
            // res.send('Author deleted.');
            // redirect back to the index route
            res.redirect('/authors');
        });
});

module.exports = router;
