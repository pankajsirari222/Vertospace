import mongoose from 'mongoose'

const dbConnection  = async ()=> {
    try {
        // To connect with database
        await mongoose.connect(process.env.mongoURI, { useNewUrlParser: true })
        console.log("Successfully connected to DB")
    }
    catch(error) {
        console.log("Error connecting to Database", error.message)
    }
}

export default dbConnection