var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Planning-Poker');

var Book = require("./models/book");
var User = require("./models/user");

mongoose.promise = global.Promise;

Book.remove({}, function(err) {
  console.log(err);
});

User.remove({}, function(err) {
  console.log(err);
});

var grisham = new Book({
  first_name: 'John',
  last_name: 'Grisham',
  category: 'Thriller',
  book_title: 'Confession'

});

var walker = new Book({
  first_name: 'Alice',
  last_name: 'Walker',
  category: 'Fiction',
  book_title: 'The Color Purple'
});

var berendt = new Book({
  first_name: 'John',
  last_name: 'Berendt',
  category: 'True Crime',
  book_title: 'Midnight in the Garden of Good and Evil'
});

var crothers = new Book({
  first_name: 'Tim',
  last_name: 'Crothers',
  category: 'Inspirational',
  book_title: 'The Queen of Katwe'
});

var franklin = new Book({
  first_name: 'Judy',
  last_name: 'Franklin',
  category: 'Inspirational',
  book_title: 'Experiencing The Heavenly Realm'
});

var minichiello = new User({
  first_name: 'CaSandra',
  last_name: 'Minichiello',
  email: 'minichiello_casandra@example.com'
});

var bart = new User({
  first_name: 'Garden',
  last_name: 'Bart',
  email: 'bart_garden@example.com'
});

grisham.save(function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Grisham John created!');
});

walker.save(function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Walker Alice created!');
});

berendt.save(function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Berendt John created!');
});

crothers.save(function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Crothers Tim created!');
});

franklin.save(function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Franklin Judy created!');

});

minichiello.save(function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Minichiello CaSandra created!');

});

bart.save(function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Bart Garden created!');

});
