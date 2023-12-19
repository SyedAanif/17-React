// we can import anyway, CJS or EJS way
// var React = require("react");
// var ReactDOM = require("react-dom");
import React from "react";
import ReactDOM from "react-dom/client";

// render(What, where)
//  this happens by JSX-> HTML in JS file -> HTML is picked up compiler and converted to JS
// Babel compiler does this, converts JSX to old JS to be rendered(document based)
//  NOTE:: For CJS this will work
// ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));

//  But for EJS this should work from React 18
// inject root element into DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
// render in that element
// root.render(<h1>Hello World!</h1>);

//  This gives error because only one element can be inside the render
// root.render(<h1>Hello World!</h1><p>This is a paragraph.</p>);

// to overcome
root.render(
  <div>
    <h2>Hello World!</h2>
    <p>This is a paragraph.</p>
  </div>
);

// Equivalent to above
// var h1 = document.createElement("h1");
// h1.innerHTML = "Hello World!";
// document.getElementById("root").appendChild(h1);
