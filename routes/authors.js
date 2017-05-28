var express = require('express');
var router = express.Router();

var User = require("../models/user");
var Item = require("../models/item");

// index
router.get('/', function(req, res) {
  // find all books
  User.find({})
    .exec(function(err, authors) {
      if (err) {
        console.log(err);
        return;
      }
      // then pass the list to Handlebars to render
      response.render('users/index', {
                userList: userList
            });
        })
})
// new
router.get('/new', function (request, response) {
    // simply render the new user form
    response.render('users/new');
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

// show author
router.get('/:id', function(req, res) {
  Author.findById(req.params.id)
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
// create author
router.post('/', function(req, res) {
  var author = new Author({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    country: req.body.country,
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

      console.log('Author deleted.');
      res.send('Author deleted.');
    });
});
// update author
router.patch('/:id', function(req, res) {
  Author.findByIdAndUpdate(req.params.id, {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    country: req.body.country,
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
