import React from "react";
import ReactDOM from "react-dom/client";
// we can name default exports anything
// import x from "./math"; // gets default export
import pi from "./math";

import { doublePi, triplePi } from "./math";

// this is also the way to do imports
// import pi, { doublePi } from "./math";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>
);
