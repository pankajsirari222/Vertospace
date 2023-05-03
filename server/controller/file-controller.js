import File from '../models/file.js'

// COntroller file for uploadcontrol

export const uploadControl = async (req, res)=> {
    const fileObj = {
        path : req.file.path,
        name : req.file.originalname
    }

    try {
        // let fileExists = await File.findOne({name: fileObj.name});
        
        // console.log(fileExists)

        // if(fileExists) {
        //     return res.status(400).json({error : "File already exists"})
        // }

        const file = await File.create(fileObj)
        return res.status(200).json({path : `http://localhost:${process.env.PORT}/file/${file._id}`})
    }
    catch(error) {
        console.log(error.message);
        return res.status(500).json({error : error.message})
    }
}

// Download file
export const downloadControl = async (req,res) => {
    try {
       const file = await File.findById(req.params.fileId)
       
       if (!file) {
        return res.status(404).send('File not found');
      }
      
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
            {name: { $regex: new RegExp(req.params.key, "i") }}
        ]
       })

       res.send(result)
    }
    catch(error) {
        console.error(error.message)
        return res.status(500).json({error : error.message})
    }
}

