import File from '../models/file.js'

// COntroller file for uploadcontrol

export const uploadControl = async (req, res)=> {
    const fileObj = {
        path : req.file.path,
        name : req.file.originalname
    }

    try {
        const file = await File.create(fileObj)
        res.status(200).json({path : `http://localhost:${process.env.PORT}/file/${file._id}`})
    }
    catch(error) {
        console.log(error.message);
        response.status(500).json({error : error.message})
    }
}

// Downlaoad file
export const downloadControl = async (req,res) => {
    try {
       const file = await File.findById(req.params.fileId)
       
       if (!file) {
        return res.status(404).send('File not found');
      }
      
       file.downloadCount++

       await file.save()

       res.download(file.path, file.name)
    }
    catch(error) {
        console.error(error.message)
        return res.status(500).json({error : error.message})
    }
}

// Search files
export const searchFiles = async (req,res) => {
    try {
       let result = await File.find({
        "$or": [
            {name : { $regex : req.params.key }}
        ]
       })

       res.send(result)
    }
    catch(error) {
        console.error(error.message)
        return res.status(500).json({error : error.message})
    }
}

