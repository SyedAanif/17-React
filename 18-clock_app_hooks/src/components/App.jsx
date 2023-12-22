import React, { useState } from "react";

function App() {
  // Hooks should be inside function, so thats the reason every code is here
  let currentTime = new Date().toLocaleTimeString();
  // console.log(currentTime);

  //   use HOOKS- useState to dynamically get state
  const [stateTime, newTime] = useState(currentTime);

  function getCurrentTime() {
    currentTime = new Date().toLocaleTimeString();
    // use the hook callback to update the state
    newTime(currentTime);
  }

  //   call the function every second
  setInterval(getCurrentTime, 1000);

  return (
    <div className="container">
      <h1>{stateTime}</h1>
      <button onClick={getCurrentTime}>Get Time</button>
    </div>
  );
}

export default App;
