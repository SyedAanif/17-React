import React, { useState } from "react";

// we can use Hooks only in Funnctional Components
// this has less biolerplate code
// ease of using state
function FunctionalComponent() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default FunctionalComponent;
