// Mongoose allows us to create and enforce schema, mongodb is schema less
// Schema is basically a structure of the db
const mongoose = require('mongoose')    
// Schema Function
const Schema = mongoose.Schema
// Creates a new Schema
const UserSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    phoneNo : {
        type : Number,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }
});

// Exporting this schema as model -> First parameter is module name, second is schema name.
// model applies the schema to a model and interacts with collections.
module.exports = mongoose.model('user', UserSchema)