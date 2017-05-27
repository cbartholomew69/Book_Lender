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

module.exports = router;
