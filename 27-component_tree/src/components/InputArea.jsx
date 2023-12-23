import React, { useState } from "react";

function InputComponent(props) {
  const [item, setItem] = useState("");

  function handleChange(event) {
    const { value } = event.target;
    setItem(value);
  }

  return (
    <div className="form">
      <input type="text" value={item} onChange={handleChange} />
      <button
        onClick={() => {
          props.click(item);
          // clear state
          setItem("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputComponent;
