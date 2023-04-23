import { Router } from 'express'
import { uploadControl, downloadControl, searchFiles}  from '../controller/file-controller.js'    //.js extension is compulsory for backend
import upload from '../utils/upload.js'

const router = Router() // Router used for routing pages


// on /upload route, uploadcontrol will be called to send response from server
// middleware is also used to upload
router.post('/upload', upload.single('file'), uploadControl)   

router.get('/file/:fileId', downloadControl)

router.get('/searchfile/:key', searchFiles)

export default router