import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import AddIcon from "@material-ui/icons/Add";
import "./dropzoneStyle.css";

export default function PortraitDropzone() {
  const [picture, setPicture] = useState(0);

  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles) {
      setPicture(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      className="w-25 p-3 border rounded dropzone-border text-center d-inline-block "
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <AddIcon color="disabled" fontSize="large" />
      {isDragActive ? (
        <p className="text-secondary my-auto">Drop it here ...</p>
      ) : picture ? (
        <p className="text-secondary my-auto text-truncate">
          {picture.path}
        </p>
      ) : (
        <p className="text-secondary my-auto">Your Picture</p>
      )}
    </div>
  );
}
