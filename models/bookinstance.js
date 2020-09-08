const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let BookInstanceSchema = new Schema({
    book : {type : Schema.Types.ObjectId, ref : 'Book', required : true},
    imprint : {type : String, required : true},
    status : {type : String, enum :['Available', 'Loaned', 'Reserved', 'Maintenance'], default : 'Maintenance', required : true},
    due_back : {type : Date, default : Date.now}
});

BookInstanceSchema
.virtual('url')
.get( () => {
    return '/catalog/bookinstance/' + this.__id;
});

module.exports = mongoose.model('BookInstance', BookInstanceSchema);