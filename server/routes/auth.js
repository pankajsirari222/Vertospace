const express = require('express')
const User = require('../models/User')  // Importing user model
const router = express.Router()

const { body, validationResult } = require('express-validator')

// Create a user using : POST "/api/auth/". Doesnt require auth.
router.post('/', [
    
    body('name','Enter a valid name').isLength({ min: 3 }),
    body('email','Enter a valid email id').isEmail(),
    body('password', 'Password should be min. 6 letters long').isLength({ min: 6 }),
    body('phoneNo', 'phoneNo should be min. 10 letters long').isLength({ min: 10 }),

] ,(req, res)=> {
    console.log(req.body)

    // express-Validation error handling
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    User.create({
        
      name : req.body.name,
      email : req.body.email,
      password : req.body.password,
      phoneNo : req.body.phoneNo,

    }).then(user => res.json(user));

})


module.exports = router