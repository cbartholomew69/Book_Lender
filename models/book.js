var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.promise = global.Promise;

var BookSchema = new Schema({
    first_name: String,
    last_name: String,
    category: String,
    book_title: String,
    //is_borrowed: Boolean
    // borrower: [UserSchema]
});

BookSchema.pre('save', function(next){
    now = new Date();
    this.updated_at = now;
    if ( !this.created_at ) {
        this.created_at = now;
    }
    next();
});

BookSchema.virtual('fullName').get(function () {
    return this.first_name + ' ' + this.last_name;
});

module.exports = mongoose.model("Book", BookSchema);
