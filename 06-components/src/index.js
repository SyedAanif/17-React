import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

// // import the fucntionality
// import Heading from "./Heading";

// import List from "./UnorderedList";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <div>
//     {/* Insert the above created component as an HTML tag.
//     NOTE:: The case of function is pascal */}
//     {/* <Heading></Heading> */}
//     {/* if there is nothing in between the tags, we can use self-closing tags */}
//     <Heading />
//     <List />
//   </div>
// );

// NOTE:: We tend to write above as a React App component
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
