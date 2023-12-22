import React, { useState } from "react";

function App() {
  const [textValue, setText] = useState("");
  const [isSubmitted, setSubmit] = useState(false);

  function handleChange(event) {
    console.log(event.target["value"]);
    // console.log(event.target["type"]);
    // console.log(event.target["placeholder"]);
    setText(event.target["value"]);
    setSubmit(false);
  }

  function handleClick() {
    setSubmit(true);
  }

  // if we use form, then to prevent refresh we use this
  // function handleClick(event) {
  //   setSubmit(true);

  //   event.preventDefault();
  // }

  return (
    <div className="container">
      {/* <h1>{textValue == "" ? "Hello" : "Hello, " + textValue} </h1> */}
      <h1>{!isSubmitted ? "Hello" : "Hello, " + textValue} </h1>
      {/* This is a CONTROLLED component-> the "value" of the state of an element is controlled by React rather than element itself */}
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={textValue}
      />
      <button onClick={handleClick}>Submit</button>
      {/* If we put this in the <form> then button causes onSubmit for the form and refreshes it.
      so to prevent it in the handler we use event.preventDefault() */}
      {/* <form onSubmit={handleClick}>
        <input/>
        <button type="submit"></button>
      </form> */}
    </div>
  );
}

export default App;
