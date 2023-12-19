import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// This would work in normal HTML with Inline Styling,
// but JSX demands the style to be a JS object {key: value}
// root.render(<h1 style="color: red">Hello World!</h1>);

// create JS object
// NOTE:: Keep a note of case used font-size -> fontSize
// also note the values are in strings
// Inline Styling is used for on the fly change of styling.
const inlineStyling = {
  color: "blue",
  fontSize: "3.5rem",
  border: "1px solid black",
};

// on the fly change of object
inlineStyling.color = "red";

// JS object pass it as a JS into JSX
root.render(<h1 style={inlineStyling}>Inline Styling using JSX!</h1>);
