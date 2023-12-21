// not fully necessary
import React from "react";
import HeaderElement from "./Header";
import FooterElement from "./Footer";
import NoteComponent from "./Note";
import notes from "../notes";

// NOTE:: This file can be App.jsx or App.js..
// React should get a JS file. .jsx is just a good-practice for some repositories
function App() {
  return (
    <div>
      <HeaderElement />
      {/* we can omit return and braces */}
      {notes.map((note) => {
        return (
          <NoteComponent
            key={note["key"]}
            title={note["title"]}
            content={note["content"]}
          />
        );
      })}

      <FooterElement />
    </div>
  );
}

export default App;
