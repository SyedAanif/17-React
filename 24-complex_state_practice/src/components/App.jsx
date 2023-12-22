import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setContact((previousValue) => {
      if (name === "fName") {
        return {
          firstName: value,
          lastName: previousValue["lastName"],
          email: previousValue["email"],
        };
      } else if (name === "lName") {
        return {
          firstName: previousValue["firstName"],
          lastName: value,
          email: previousValue["email"],
        };
      } else if (name === "email") {
        return {
          firstName: previousValue["firstName"],
          lastName: previousValue["lastName"],
          email: value,
        };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {contact["firstName"]} {contact["lastName"]}
      </h1>
      <p>{contact["email"]}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          value={contact["firstName"]}
          onChange={handleChange}
        />
        <input
          name="lName"
          placeholder="Last Name"
          value={contact["lastName"]}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={contact["email"]}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
