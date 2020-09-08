const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GenreSchema = new Schema({
    name : {type : String, required: true, max: 100}
});

GenreSchema
.virtual('url')
.get( () => {
    return '/catalog/genre/' + this.__id;
});

module.exports = mongoose.model('Genre', GenreSchema);