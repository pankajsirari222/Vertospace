import { Form, Button } from "react-bootstrap";
// import { AiOutlineSearch } from "react-icons/ai";
import { useState, useEffect } from "react";
import axios from "axios";

const SearchFiles = () => {
  const [file, setFile] = useState(null);
  const [searchKey, setSearchKey] = useState("");
  const[id,setId] = useState(null);
  const[filename,setFileName] = useState("");

  //handle search
  const handleSearch = (e) => {
    setSearchKey(e.target.value);
  };

  // Calling Search API using AXIOS
  useEffect(() => {
    const fetchFile = async () => {
      if (searchKey) {
        try {
          let result = await axios.get(
            `http://localhost:8000/searchfile/${searchKey}`
          );

          if (result.data) {
            // console.log(result.data);
            setFile(result.data);
          }
        } catch (error) {
          console.error(error);
        }
      } else {
        setFile(null);
      }
    };

    fetchFile();
  }, [searchKey]);


  // handle Download
  const handleDownload = (id, filename)=> {
    setId(id);
    setFileName(filename);
  }

  // Download API 
  useEffect(() => {
    const downloadFile = async () => {
      if (id) {
        try {
          let response = await axios.get(
            `http://localhost:8000/file/${id}`,
            {
              responseType: 'blob',
            }
          );

          // create a link to download the file
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();

        } catch (error) {
          console.error(error);
        }
      }
      else {
        setFile(null)
      }
    };

    downloadFile();
  }, [id]);

  return (
    <>
      <Form className="d-flex search-bar">
        <Form.Control
          type="search"
          placeholder="Search Files..."
          className="me-2"
          aria-label="Search"
          onChange={handleSearch}
        />
        {/* <Button variant="outline-success">
          <AiOutlineSearch className="search-icon" />
        </Button> */}
      </Form>
        <div className="search-results">
        {file &&
        file.map((item) => (
          <div onClick={()=> handleDownload(item._id, item.name) } key={item._id}>
            <p>{item.name}</p>
          </div>
        ))}
        </div>
    
    </>
  );
};

export default SearchFiles;
