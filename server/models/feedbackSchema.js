import mongoose from "mongoose";

const feedbackSchema = mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true
    },
    message: {
        type : String,
        required : true
    }
})

export default mongoose.model('feedback', feedbackSchema)