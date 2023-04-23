// Schema
import { Schema, model } from 'mongoose'

const fileSchema = new Schema({
    path : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    // downloadCount : {
    //     type : Number,
    //     default : 0
    // }
})

const File = model('file', fileSchema)

export default File