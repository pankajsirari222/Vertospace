import { useRef, useState, useEffect } from 'react';
import { Button } from "react-bootstrap";
import UploadFile from '../services/api'
import { Link } from "react-router-dom";

const Upload = () => {
    
    const [file, setFile] = useState("")
    const [result, setResult] = useState("")

    const fileInputRef = useRef()

    useEffect(()=> {
        const getFile = async ()=> {
            if(file) {
                const data = new FormData()
                data.append("name",file.name)
                data.append("file",file)

                let response = await UploadFile(data)    // API call

                setResult(response.path)
            }
        }
        getFile()
    },[file])

    function handleClick() {
      fileInputRef.current.click()
    }
    
    console.log(file)
    return ( 
        <div class = "grad">
        <h1> Upload a File </h1>
        <input type = "file" hidden = { true } ref = { fileInputRef } onChange = {(e)=> {
            setFile(e.target.files[0])  // e.target.files returns an array bcz multiple files can be selected.
        } }/>
        <div className='text-center justify-'>
            <Button variant="primary" onClick={handleClick}>
                    Upload a File
            </Button>
        </div>
        <div style={{textAlign:"center", padding:100}}>
            To download and check the file click here :
            <Button variant="light" type="submit" >
            <Link to = {result}>Download File</Link>
          </Button>
        </div>
        </div>
    );
}
 
export default Upload;