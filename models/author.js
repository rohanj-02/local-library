const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let AuthorSchema = new Schema({
    first_name : {type : String, max : 100, required : true},
    family_name :{type : String, required : true, max : 100},
    date_of_birth : {type : Date },
    date_of_death : {type : Date }
});

AuthorSchema
.virtual('name')
.get(() => {
    
    let fullname = '';
    if(this.family_name && this.first_name){
        fullmame = this.family_name + ',' + this.first_name;
    }
    if(!this.family_name || this.first_name){
        fullname = '';
    }
    return fullname;
});

AuthorSchema
.virtual('lifespan')
.get( () => {
    return (this.date_of_death.getYear() - this.date_of_birth.getYear()).toString();
});

AuthorSchema
.virtual('url')
.get( () => {
    return '/catalog/author/' + this.__id;
});

module.exports = mongoose.model('Author', AuthorSchema);