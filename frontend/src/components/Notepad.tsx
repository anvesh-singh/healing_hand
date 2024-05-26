import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
export const Notepad = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
      <button>submit</button>
    </div>
  );
};
