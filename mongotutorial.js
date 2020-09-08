const mongoose = require('mongoose');

let mongoDB = "mongodb://127.0.0.1/my_database";
mongoose.connect(mongoDB, {useNewUrlParser : true, useUnifiedTopology: true});

let db = mongoose.connection;

db.on('error', console.error.bind(console, "MongoDB Connection Error"));

const Schema = mongoose.Schema;

let someSchema = new Schema({
    a_name : String
});

let someModel = mongoose.model('someModel', someSchema);

let someInstance = new someModel({name : 'Rohan'});

someInstance.save((err) => {
    if(err)
        return handleError(err);
});

someModel.create({name: 'Rohan Jain'}, (err, awesomeInstance) => {
    if(err)
        return handleError(err);
});

console.log(someInstance.name);