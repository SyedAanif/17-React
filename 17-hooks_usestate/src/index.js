import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

// var count = 0;

// function increase() {
//   // This will increase count value, but the state doesn't go to the variable rendered
//   count++;
//   console.log(count);

//   // One way to do it would be re-render the DOM every time
//   // root.render(
//   //   <div className="container">
//   //     {/* <h1>0</h1> */}
//   //     <h1>{count}</h1>
//   //     {/* we will use this to trigger update on number above */}
//   //     <button onClick={increase}>+</button>
//   //   </div>
//   // );

//   // But more effective way is HOOKS -> functions to tap into state of an app. can be used in functional components
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <div className="container">
//     {/* <h1>0</h1> */}
//     <h1>{count}</h1>
//     {/* we will use this to trigger update on number above */}
//     <button onClick={increase}>+</button>
//   </div>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
