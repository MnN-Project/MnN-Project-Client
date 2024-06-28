import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = ({...props}) => {
    const modules = {
        toolbar: [
          ["bold", "italic", "underline", "strike"], 
          ["blockquote"],
          ["link"],
          [{ header: 1 }, { header: 2 }], 
          [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
          [{ script: "sub" }, { script: "super" }], 
          [{ indent: "-1" }, { indent: "+1" }], 
          [{ direction: "rtl" }], 
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ color: [] }, { background: [] }], 
          [{ font: [] }],
          [{ align: [] }],
          ["clean"], 
      ]
    };
  
  return (
    <ReactQuill className='inline-block h-24' modules={modules} theme="snow" {...props} />
  )
}

export default Editor
