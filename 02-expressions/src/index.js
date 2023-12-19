import React from "react";
import ReactDOM from "react-dom";

const lName = "Aanif";
const fName = "Syed";
const luckyNumber = Math.floor(Math.random() * 9) + 1;

const root = ReactDOM.createRoot(document.getElementById("root"));

// Insert JavaScript EXPRESSIONS into HTML {expression/value} --> expression becomes a value
//  but not STATEMENTS ex: if-else
root.render(
  <div>
    {/* <h1>Hello {fName + " " + lName}!</h1> */}
    {/* <h1>
      Hello {fName} {lName}!
    </h1> */}
    {/* ES6 Template Literals*/}
    <h1>Hello {`${fName} ${lName}`}!</h1>
    <p>Your lucky number is: {luckyNumber}</p>
  </div>
);
