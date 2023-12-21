import React from "react";
import Login from "./Login";

/*
NOTE: This is one of the ways of achieving consitional rendering of components
    var isLoggedIn = true;

    function renderCondtionally() {
    if (isLoggedIn) {
        return <h1>Hello</h1>;
    } else {
        return (
        <form className="form">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
        );
    }
    }

    function App() {
    return <div className="container">{renderCondtionally()}</div>;
    }

*/

// Another way would be to form SINGLE-RESPONSIBILITY re-usable components
// https://simple.wikipedia.org/wiki/SOLID_(object-oriented_design)
var isLoggedIn = false;

function renderCondtionally() {
  if (isLoggedIn) {
    return <h1>Hello</h1>;
  } else {
    return <Login />;
  }
}

// function App() {
//   return <div className="container">{renderCondtionally()}</div>;
// }

// Best would be if we could do thi inline, but JSX only takes expressions not statements
// function App() {
//     return <div className="container">{if (isLoggedIn) {
//         return <h1>Hello</h1>;
//       } else {
//         return <Login />;
//       }}</div>;
//   }

var currentTime = new Date().getHours();

// Thus we can use TERNARY Operator which is expression:  "consition? if true : else false"
function App() {
  return (
    <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />}</div>

    //  if we don't want anything if a condition is false, we use "null"
    // <div className="container">
    //   {currentTime > 18 ? <h1>Why are you still working?</h1> : null}
    // </div>

    // Another beautiful way to do it is:
    // In JavaScript for "&&" , expression evaluates from left-right
    // (expression) && (expression)
    // (true) && (this will evaluate)
    // (false) && (this won't evaluate)
    // Hence a default way instead of null would be:
    // <div className="container">
    //   {currentTime > 17 && <h1>Why are you still working?</h1>}
    // </div>
  );
}

// Base functtionality
// function App() {
//   return (
//     <div className="container">
//       <h1>Hello</h1>
//       <form className="form">
//         <input type="text" placeholder="Username" />
//         <input type="password" placeholder="Password" />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }
export default App;
