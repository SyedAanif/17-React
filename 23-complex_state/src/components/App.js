import React, { useState } from "react";

function App() {
  // Managing states of objects
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: "",
  });

  function handleChange(event) {
    // const newValue = event.target["value"];

    // event.target["name"] === "fName"
    //   ? setFullName({ firstName: newValue, lastName: fullName["lastName"] })
    //   : setFullName({ firstName: fullName["firstName"], lastName: newValue });

    // This can be re-written using destructuring
    const { value, name } = event.target;

    // never use event values inside set state because these are SYNTHETIC EVENTS that react creates in handlers
    setFullName((previousValue) => {
      // everytime state is set we can get hold of previous value
      // console.log(previousValue);

      if (name === "fName") {
        return { firstName: value, lastName: previousValue["lastName"] };
      } else if (name === "lName") {
        return { firstName: previousValue["firstName"], lastName: value };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName["firstName"]} {fullName["lastName"]}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          value={fullName["firstName"]}
          onChange={handleChange}
        />
        <input
          name="lName"
          placeholder="Last Name"
          value={fullName["lastName"]}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
  // This is one of the ways to do it, but we can manage more complex states like states of objects
  /*
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleChange(event) {
    // console.log(event)
    event.target["name"] === "fName"
      ? setFirstName(event.target["value"])
      : setLastName(event.target["value"]);
  }

  return (
    <div className="container">
      <h1>
        Hello {firstName} {lastName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleChange}
          value={firstName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChange}
          value={lastName}
        />
        <button>Submit</button>
      </form>
    </div>
  );*/
}

export default App;
