import React, { useState } from "react";

function CreateNote(props) {
  let emptyNote = {
    title: "",
    content: "",
  };
  const [noteDetails, setNoteDetails] = useState(emptyNote);

  function createNote(event) {
    // add to main list
    props.onAdd(noteDetails);

    // clear data
    setNoteDetails(emptyNote);

    //  necessary to prevent refresh
    event.preventDefault();
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNoteDetails((prevDetails) => {
      return { ...prevDetails, [name]: value };
    });

    // console.log(noteDetails);
  }

  return (
    <form>
      <input
        name="title"
        placeholder="Title"
        onChange={handleChange}
        value={noteDetails["title"]}
      />
      <textarea
        name="content"
        placeholder="Take a note..."
        rows="4"
        onChange={handleChange}
        value={noteDetails["content"]}
      />
      <button onClick={createNote}>Add</button>
    </form>
  );
}

export default CreateNote;
