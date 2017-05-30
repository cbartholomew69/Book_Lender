var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
// });

var User = require("../models/user");
var Author = require("../models/author");

// USERS INDEX ROUTE
router.get('/', function (request, response) {

    // find all of the users
    User.find({})
        .exec(function (error, userList) {

            if (error) {
                console.log("Error while retrieving users: " + error);
                return;
            }

            // then pass the list of users to Handlebars to render
            response.render('users/index', {
                userList: userList
            });
        })
})

// USER CREATE FORM (NEW)
router.get('/new', function (request, response) {

    // simply render the new user form
    response.render('users/new');
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

// USER SHOW ROUTE
router.get('/:id', function (request, response) {

    // grab the ID of the user we want to show
    var userId = request.params.id;

    // then find the user in the database using the ID
    User.findById(userId)
        .exec(function (error, user) {

            if (error) {
                console.log("Error while retrieving user with ID of " + userId);
                console.log("Error message: " + error);
                return;
            }

            // once we've found the user, pass the user object to Handlebars to render
            response.render('users/show', {
                user: user
            });
        });

});


// USER EDIT ROUTE
router.get('/edit/:id', function (request, response) {

    // grab the ID of the user we want to edit from the parameters
    var userId = request.params.id;

    // then find the user we want to edit in the database, using the ID
    User.findById(userId)
        .exec(function (error, user) {

            if (error) {
                console.log("Error while retrieving user with ID of " + userId);
                console.log("Error message: " + error);
                return;
            }

            // once we have found the user, pass the user info to the
            // user edit form so we can pre-populate the form with existing data
            response.render('users/edit', {
                user: user
            });
        });
});

// USER UPDATE ROUTE
router.put('/:id', function (request, response) {

    // grab the ID of the user we want to update from the parameters
    var userId = request.params.id;

    // then grab the edited user info from the form's PUT request
    var newUserInfo = request.body;

    // then find the user in the database, and update its info to
    // match what was updated in the form
    // (remember to pass { new: true })
    User.findByIdAndUpdate(userId, newUserInfo, { new: true })
        .exec(function (error, user) {

            if (error) {
                console.log("Error while updating User with ID of " + userId);
                return;
            }

            // once we have found the user and updated it, redirect to
            // that user's show route
            response.redirect('/users/' + userId);

        });

});


// USER DELETE
router.get('/delete/:id', function (request, response) {

    // grab the ID of the user we want to delete from the parameters
    var userId = request.params.id;

    // then find and delete the user, using the ID
    User.findByIdAndRemove(userId)
        .exec(function (error, user) {

            if (error) {
                console.log("Error while deleting User with ID of " + userId);
                return;
            }

            // once the user has been deleted, redirect back to the users index
            response.redirect('/users');

        });

});

module.exports = router;
