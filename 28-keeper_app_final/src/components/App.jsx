import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";

function App() {
  const [notes, updateNotes] = useState([]);

  function addNote(noteDetails) {
    updateNotes((prevNotes) => {
      return [...prevNotes, noteDetails];
    });
  }

  function deleteNote(id) {
    updateNotes((prevNotes) => {
      return prevNotes.filter((_, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateNote onAdd={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note["title"]}
            content={note["content"]}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
