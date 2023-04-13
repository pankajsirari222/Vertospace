const mongoose = require('mongoose')    
// Schema Function
const Schema = mongoose.Schema
// Creates a new Schema
const NotesSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true,
        unique : true
    },
    tag: {
        type : String,
        default : "General"
    },
    date : {
        type : Date,
        default : Date.now
    }
});

module.exports = mongoose.model('notes', NotesSchema)