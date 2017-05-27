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
  category: 'Thriller',
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
  category: 'Inpspirational',
  book_title: 'The Queen of Katwe',
  publication_year: '2013'
});

var franklin = new Author({
  first_name: 'Judy',
  last_name: 'Franklin',
  category: 'Inpspirational',
  book_title: 'Experiencing the Heavenly Realm',
  publication_year: '2011'
});

var stone = new Author({
  first_name: 'Perry',
  last_name: 'Stone',
  category: 'Inpspirational',
  book_title: 'Openning the Gates of Heaven',
  publication_year: '2012'
});

var ferrell = new Author({
  first_name: 'L. Emerson',
  last_name: 'Ferrell',
  category: 'Inpspirational',
  book_title: 'Immersed In Him',
  publication_year: '2010'
});

var van der Steen = new Author({
  first_name: 'Matheus',
  last_name: 'van der Steen',
  category: 'Inpspirational',
  book_title: 'Dare to Dream',
  publication_year: '2011'
});

var farwell = new Author({
  first_name: 'Hanna',
  last_name: 'Farwell',
  category: 'Inpspirational',
  book_title: 'The Sword and the Tambourine',
  publication_year: '2010'
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

stone.save(function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Stone Perry created!');
});

ferrell.save(function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Ferrell L. Emerson created!');
});

van der steen.save(function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('van der Steen Matheus created!');
});

farwell.save(function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Farwell Hanna created!');
});
