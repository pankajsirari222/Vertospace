import { useRef, useState, useEffect } from 'react';
import { Button } from "react-bootstrap";
import UploadFile from '../services/api'


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
        <>
        <h1> Upload a File </h1>
        <input type = "file" hidden = { true } ref = { fileInputRef } onChange = {(e)=> {
            setFile(e.target.files[0])  // e.target.files returns an array bcz multiple files can be selected.
        } }/>
        <div className='text-center justify-'>
            <Button variant="primary" onClick={handleClick}>
                    Upload a File
            </Button>
        </div>
        <a href = {result}>{result}</a>
        </>
    );
}
 
export default Upload;