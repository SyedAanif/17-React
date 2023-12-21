import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {/* conditionally rendering an element */}
      {!props["isUserRegistered"] && (
        <input type="password" placeholder="Confirm Password" />
      )}
      {/* Ternary operator to decide text */}
      <button type="submit">
        {props["isUserRegistered"] ? "Login" : "Register"}
      </button>
    </form>
  );
}

export default Form;
