import { useRef, useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import UploadFile from "../services/api";
import { Link } from "react-router-dom";
import SearchFiles from "../components/SearchFiles";

const Upload = () => {
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");

  const fileInputRef = useRef();

  useEffect(() => {
    const getFile = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await UploadFile(data); // API call

        setResult(response.path);
      }
    };
    getFile();
  }, [file]);

  function handleClick() {
    fileInputRef.current.click();
  }

  console.log(file);
  return (

    <div className="upload-download">
      <div>
      </div>
      <div className="search">
        <SearchFiles />
      </div>
      <div className="upload">
      <div className="upload-text">Contribute and support us by uploading files here:- </div>
      <input type = "file" hidden = { true } ref = { fileInputRef } onChange = {(e)=> {
        setFile(e.target.files[0])  // e.target.files returns an array bcz multiple files can be selected.
    } }/>
    <div className='text-center justify-'>
        <Button variant="primary" onClick={handleClick}>
                Upload a File
        </Button>
    </div>
    <div style={{textAlign:"center", padding:100}}>
        To download and check the uploaded file:
        <Button variant="light" type="submit" >
        <Link to = {result}>Click here</Link>
      </Button>
    </div>

      </div>
    </div>
  );
};

export default Upload;
