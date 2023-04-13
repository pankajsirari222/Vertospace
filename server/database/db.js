import mongoose from 'mongoose'

const dbConnection  = async ()=> {
    try {
        await mongoose.connect(process.env.mongoURI, { useNewUrlParser: true })
        console.log("Successfully connected to DB")
    }
    catch(error) {
        console.log("Error connecting to Database", error.message)
    }
}

export default dbConnection