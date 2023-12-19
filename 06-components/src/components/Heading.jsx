// this is required because we are using JSX. which interprets HTML in pure JS.
import React from "react";

// Create JSX for each component

// create a function for each component.
// COMPONENT is a micro-part of a website that can be re-used
function Heading() {
  return <h1>My Favourite Foods</h1>;
}

// export this fucntionality
export default Heading;
