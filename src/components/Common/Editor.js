import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function Editor(props) {
const { handleContentChange, defaultValue="" } = props;
  let [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (loaded) {
    return (
      <div style={{"color": '#000'}}> 
        <CKEditor
          editor={ClassicEditor}
          data={defaultValue ? defaultValue : "Add item here"}
          onChange={(event, editor) => {
            const data = editor.getData();
            handleContentChange(data);
          }}
        />
      </div>
    );
  } else {
    return <h2> Editor is loading </h2>;
  }
}

export default Editor;