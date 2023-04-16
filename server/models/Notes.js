import mongoose from "mongoose";   
// Schema Function
const Schema = mongoose.Schema
// Creates a new Schema
const NotesSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'user',
    },
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

export default mongoose.model('notes', NotesSchema)