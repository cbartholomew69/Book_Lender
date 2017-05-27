var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Planning-Poker');

var Author = require("./models/author");

mongoose.promise = global.Promise;

Author.remove({}, function(err) {
  console.log(err);
});

var grisham = new Author({
  first_name: 'John',
  last_name: 'Grisham',
  category: 'thriller',
  book_title: 'Confession',
  publication_year: '2010'
});

var walker = new Author({
  first_name: 'Alice',
  last_name: 'Walker',
  category: 'Fiction',
  book_title: 'The Color Purple',
  publication_year: '1982'
});

var berendt = new Author({
  first_name: 'John',
  last_name: 'Berendt',
  category: 'True Crime',
  book_title: 'Midnight in the Garden of Good and Evil',
  publication_year: '2009'
});

var crothers = new Author({
  first_name: 'Tim',
  last_name: 'Crothers',
  category: 'Unites States',
  book_title: 'The Queen of Katwe',
  publication_year: '2013'
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
