import React, { useState } from "react";
import MDEditor, { selectWord } from "@uiw/react-md-editor";
export default function Editor() {
  const [value, setValue] = useState("");

  return (
    <div className="container">
      <h2>Markdown Editor</h2>
      <MDEditor
        height={600}
        value={value}
        textareaProps={{
          placeholder: "Please enter Markdown text here...",
        }}
        
        onChange={setValue}
      />
    </div>
  );
}
