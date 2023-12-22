import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMousedOver, setMouseOver] = useState(false);

  function handleClick() {
    // console.log("Clicked");
    setHeadingText("Submitted");
  }

  function handleMouseOver() {
    // console.log("Mouse Over");
    // change styling by traditional way
    // document.getElementsByTagName("button")[0].style.backgroundColor = "black";

    // by hooks
    setMouseOver(true);
  }

  function handleMouseOut() {
    // console.log("Mouse Out");
    // document.getElementsByTagName("button")[0].style.backgroundColor = "white";

    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      {/* See events: https://www.w3schools.com/tags/ref_eventattributes.asp */}
      <button
        //   using inline styling and conditional
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}
export default App;
