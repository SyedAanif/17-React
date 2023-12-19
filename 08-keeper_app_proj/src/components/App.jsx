// not fully necessary
import React from "react";
import HeaderElement from "./Header";
import FooterElement from "./Footer";
import NoteComponent from "./Note";

// NOTE:: This file can be App.jsx or App.js..
// React should get a JS file. .jsx is just a good-practice for some repositories
function App() {
  return (
    <div>
      <HeaderElement />
      <NoteComponent />
      <FooterElement />
    </div>
  );
}

export default App;
