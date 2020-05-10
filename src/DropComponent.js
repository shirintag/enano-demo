import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import "./DropComponent.css";

function DropComponent() {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <div>
          <div className="uploadIcon"></div>
          <p>Drag and drop your files here, or click to select files</p>
        </div>
      )}
    </div>
  );
}

export default DropComponent;
