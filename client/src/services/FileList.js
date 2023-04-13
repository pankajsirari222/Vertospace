import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FileList() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    async function fetchFiles() {
      const res = await axios.get('/file');
      setFiles(res.data);
    }

    fetchFiles();
  }, []);

  function handleDownload(file) {
    const link = document.createElement('a');
    link.href = `/file/${file._id}/download`;
    link.download = file.name;  
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <ul>
      <h1>Hlleo</h1>
      {files.map(file => (
        <li key={file._id}>
          {file.name}{' '}
          <button onClick={() => handleDownload(file)}>Download</button>
        </li>
      ))}
    </ul>
  );
}

export default FileList;
