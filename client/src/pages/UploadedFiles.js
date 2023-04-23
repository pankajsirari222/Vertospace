import React, { useEffect, useState } from "react";
import axios from "axios";

const UploadedFiles = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    axios
      .get("/api/files")
      .then((res) => setFiles(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>All the uploaded files will display here: - </h2>
      <ul>
        {files.map((file) => (
          <li key={file.filename}>
            <a href={`/api/files/${file.filename}`}>{file.filename}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UploadedFiles;
