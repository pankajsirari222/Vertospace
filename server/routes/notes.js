const express = require('express')
const router = express.Router()

// Will Route to '/api/notes/'
router.get('/', (req, res)=> {
    res.json([])
})

module.exports = router