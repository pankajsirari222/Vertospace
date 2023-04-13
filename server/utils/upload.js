import multer from 'multer'    // Middleware to upload file

const upload = multer({dest : 'uploads'})

export default upload