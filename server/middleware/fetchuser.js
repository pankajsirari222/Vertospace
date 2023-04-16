import jwt from 'jsonwebtoken'
const JWT_SECRET = "Hello 1234"

const fetchuser = (req,res,next)=> {
    // GET the user from jwt token and add id to req
    const token = req.header('auth-token')
    if(!token) {
        res.status(401).send({error : "Authentiction failed"}) 
    }
    try {
        const data = jwt.verify(token, JWT_SECRET)
        req.user = data.user
        next()
    }
    catch(error) {
        console.log(error.message);
        res.status(401).send({error : "Authentiction failed"}) 
    }
}

export default fetchuser