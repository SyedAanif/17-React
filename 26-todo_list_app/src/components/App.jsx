import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");

  const [listItems, setListItems] = useState([]);

  function handleChange(event) {
    const { value } = event.target;
    setItem(value);
  }

  function handleClick() {
    // Either do this to get hold of previous values
    // listItems.push(item);
    // setListItems(listItems);

    // Or use spread with previous values and current item
    setListItems((previousValues) => {
      return [...previousValues, item];
    });
    // clear state
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={item} onChange={handleChange} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItems.map((todo) => (
            <li>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
