import express from 'express'

const router = express.Router()
import feedback from '../models/feedbackSchema.js'

router.post('/feedback',(req,res)=> {
    const {name, email, message} = req.body

    if(!name || !email || !message) {
        res.status(400).json({"error": "Invalid Input"})
    }
    res.send("Hello")
})

export default router