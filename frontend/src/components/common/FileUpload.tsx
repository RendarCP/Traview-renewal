import React, { useCallback, useState, useMemo, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
`;

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row' || undefined,
  flexWrap: 'wrap',
  marginTop: 16,
} as React.CSSProperties;

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box' || undefined,
} as React.CSSProperties;

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
} as React.CSSProperties;

const img = {
  display: 'block',
  width: 'auto',
  height: '100%',
} as React.CSSProperties;

const FileUpload = () => {
  const [files, setFiles] = useState<any[]>([]);
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
    },
  });

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));
  return (
    console.log('files', files),
    (
      <>
        <Container {...getRootProps({ isFocused, isDragAccept, isDragReject })}>
          <input {...getInputProps()} />
          <div>
            <p>파일을 올려주세요!</p>
          </div>
        </Container>
        <div style={thumbsContainer}>{thumbs}</div>
      </>
    )
  );

  // useEffect(() => {
  //   // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
  //   return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  // }, []);

  // return (
  //   <Container {...getRootProps({ isFocused, isDragAccept, isDragReject })}>
  //     <input {...getInputProps()} />
  //     <p>파일을 업로드 해주세요!</p>
  //     <aside style={thumbsContainer}>{thumbs}</aside>
  //   </Container>
  // );
};

export default FileUpload;
