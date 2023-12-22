import React from "react";

var isDone = false;

function strike() {
  //   document.getElementsByTagName("h1")[0].style.textDecoration = "line-through"; // Imperative
  isDone = true; // declarative
}

function unStrike() {
  //   document.getElementsByTagName("h1")[0].style.textDecoration = null; // Imperative
  isDone = false; // declarative
}

const strikeThrough = { textDecoration: "line-through" };

// STATE: means UI-appearnce = function(state)

function App() {
  return (
    <div>
      {/* inline styling based on ternary operator ona state of a variable*/}
      {/* This is DECLARATIVE Programming: where we say functionality based on state */}
      <h1 style={isDone ? strikeThrough : null}>Buy milk</h1>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>

      {/* We need to re-render the components based on state change. This can be achieved by HOOKS: functions to read state of the app*/}
    </div>
  );
}
// This is IMPERATIVE Programming: telling exactly the item what to do
// document.getElementById("root").style.textDecoration = "line-through"

export default App;
