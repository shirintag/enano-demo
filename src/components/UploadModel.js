import React, { useCallback, Fragment } from "react";
import { useDropzone } from "react-dropzone";
import "./UploadModel.css";

function UploadModel(props) {
  const onDrop = useCallback((acceptedFiles) => {
    props.nextStep();
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Fragment>
      <h1>eNano Compression of neural networks</h1>
      <h3>Upload ONNX model</h3>
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
    </Fragment>
  );
}

export default UploadModel;
