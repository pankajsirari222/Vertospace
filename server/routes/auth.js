import express from 'express'
import User from '../models/User.js' // Importing user model

const router = express.Router()
import bcrypt from 'bcryptjs' // Hashing Passwords
import jwt from 'jsonwebtoken' // JWT -> Consists of a header, a payload, and a signature.
import fetchuser from '../middleware/fetchuser.js'

// The header of a JWT contains information about the type of token and the algorithm used to sign the token. The payload of a JWT contains the information that needs to be transmitted, such as user ID, role, and other relevant information. The signature of a JWT is created using a secret key that is only known by the server, and is used to ensure the authenticity and integrity of the token.

// ROUTE 1 : Create a user using : POST "/api/auth/". Doesnt require auth.  NO LOGIN REQUIRED
router.post('/createUser',async (req, res)=> {
  try {
    let success = false
  console.log(req.body)
  // Find a user email in DB Model
  let user = await User.findOne({success, email : req.body.email})
  // IF user EMAIL exists already, return error
  if(user) {
    return res.status(400).json({success, error : "Email already exists"})
  }
  // ELSe Create a user

  const salt = await bcrypt.genSalt(10) // Salt for adding to password and then hashing
  const secPass = await bcrypt.hash(req.body.password,salt)  // Hashing 

  
  user = await User.create({
    name : req.body.name,
    email : req.body.email,
    password : secPass,
    phoneNo : req.body.phoneNo,
  })

  // JWT 
  const JWT_SECRET = "Hello 1234"

  const data = {
    user: {
      id: user.id
    }
  }
  const authtoken = jwt.sign(data, JWT_SECRET)
  // console.log(authtoken)
  // res.json(user)
  res.json({success, authtoken})
  }
  catch(error) {
    console.log(error.message);
    return res.status(500).json({error : "Internal server error"})
  }
  
})

// ROUTE 2 : Authenticate a user  NO LOGIN REQD.
router.post('/login', async (req, res) => {
  const {email, password} = req.body
  const JWT_SECRET = "Hello 1234"

  let success = false
  try {
    // Find if email of user exists or not
    let user = await User.findOne({email})
    if(!user) {
      success = false
      return res.status(400).json({error : "Invalid Credentials"})
    }

    // Comparing password
    const passwordCompare = await bcrypt.compare(password, user.password)
    if(!passwordCompare) {
      success = false
      return res.status(400).json({success, error : "Invalid Credentials"})
    }

    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET)
    success = true
    res.json({success, authtoken})
  }
  catch(error) {
    console.log(error.message);
    return res.status(500).json({error : "Internal server error"})

  }
})


// ROUTE 3 : Details of Logged In User LOGIN reqs. POST

router.post('/getUser', fetchuser, async (req,res) => { // fetchuser is a middleware used to fetch user id from authtoken.
  try {
    const userId = req.user.id
    const user = await User.findById(userId).select("-password")
    res.send(user)
  }
  catch(error) {
    console.log(error.message);
    return res.status(500).json({error : "Internal server error"})
  
  }
})


export default router