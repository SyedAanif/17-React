import React, { useState } from "react";

function App() {
  // For HOOKS -> useState
  //   function to track state of application to update application dynamically
  // takes initial value as state and keeps on updating it
  //   // returns [state, function]
  //   Returns a stateful value, and a function to update it.
  //   const state = useState(0);

  //   console.log(state);

  //   We can tackle problem of array complexity [state, function] by ES6 concept- DE-STRUCTURING
  //   const rgb = [9, 132, 227];
  //   console.log(rgb[0]);
  //   console.log(rgb[1]);
  //   console.log(rgb[2]);

  // Easier way of doing is DE-STRUCTURING -> unpacking in order and how som many elements we want
  //   const [red, green, blue] = [9, 132, 227];
  //   console.log(red);
  //   console.log(green);
  //   console.log(blue);

  // returns [state, function]
  //   Using de-structuring concept to get hold of first element(state) and the function to update the state
  const [count, setCount] = useState(0);

  //   console.log(count);

  function increase() {
    // using the state function to update value on click
    // setCount(12);
    // increase the value by 1
    setCount(count + 1);
  }

  function decrease() {
    // decrease the value by 1
    setCount(count - 1);
  }

  return (
    <div className="container">
      {/* <h1>0</h1> */}
      {/* efficiently re-render with state value */}
      {/* <h1>{state[0]}</h1> */}

      {/* using de-structuring */}
      <h1>{count}</h1>
      {/* we will use this to trigger update on number above */}
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
