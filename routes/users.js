var express = require('express');
var router = express.Router();

var express = require('express');
var router = express.Router();

var User = require('../models/user');

// index users
router.get('/', function(req, res) {
    // res.send('users will be here');
    User.find({})
        .exec(function(err, users) {
            if(err) console.log(err);

            console.log(users);
            // res.send(users);
            res.render('users/index', {
                  users: users
            });
        });
});

// new users
router.get('/new', function(req, res) {
    res.render('users/new');
});

// create users
router.post('/', function(req, res) {
    var user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    });
    user.save(function(err, user){
        if (err) {
          console.log(err);
          return;
      }

        console.log(user);
        // res.send(user);
        res.render('users/show', {
            user: user
        });
    });
});

// show user
router.get('/:id', function(req, res) {
    User.findById(req.params.id)
        .exec(function(err, user) {
            if(err) {
              console.log(err);
              return;
            }

            console.log(user);
            // res.send(user);
            res.render('users/show', {
                user: user
            });
        });
});

// edit user
router.get('/:id/edit', function(req,res) {
    User.findById(req.params.id)
    .exec(function(err, user) {
        if (err) {
          console.log(err);
          return;
      }

        res.render('users/edit', {
            user: user
        });
    });
});

// update user
router.patch('/:id', function(req, res) {
    User.findByIdAndUpdate(req.params.id, {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }, {new: true})
        .exec(function(err, user) {
            if (err) {
              console.log(err);
              return;
          }

            console.log(user);
            // res.send(user);
            res.render('users/show', {
                user: user
            });
        });
});

// delete user
router.delete('/:id', function(req, res) {
    User.findByIdAndRemove(req.params.id)
        .exec(function(err, user) {
            if (err) { console.log(err);
              return;
            }

            console.log('User deleted.');
            // res.send('User deleted.');
            // redirect back to the index route
            res.redirect('/users');
        });
});

module.exports = router;

