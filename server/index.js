import dotenv from 'dotenv' // import dotenv file

import express from 'express'
import cors from 'cors'
import router from './routes/routes.js'
import dbConnection from './database/db.js'

dotenv.config()

const app = express()

// Middleware to use json   
app.use(express.json())

// Allows to use client and server at different ports.
app.use(cors())

// Routes
app.use('/', router )

// Connecting to DB
dbConnection()

app.listen(process.env.PORT, ()=> {
    console.log(`Server running on ${process.env.PORT}`)
})