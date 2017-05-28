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

// USER CREATE ROUTE
router.post('/', function (request, response) {

    // grab the new user information from the form POST
    var newUserFromForm = request.body;

    // then create a new User from the User model in your schema
    var user = new User({
        first_name: newUserFromForm.first_name,
        last_name: newUserFromForm.last_name,
        email: newUserFromForm.email
    });

    // then save the new user to the database
    user.save(function (err, user) {
        if (err) {
            console.log(err);
            return;
        }

        // once the new user has been saved, redirect to the users index page
        response.redirect('/users');
    });

});




module.exports = router;
