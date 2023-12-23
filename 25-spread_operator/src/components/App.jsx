import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;

    // below can be simplified even to this
    // setContact(previousValue => ({...previousValue, [name]: value}));
    setContact((previousValue) => {
      // using spread operator we can get hold of full previous value object,
      // and override the key from "name" which has changing values

      // NOTE:: for adding keys from a variable value to an object we have to make use of [key],
      // else JS will interpret key as some string not value of a variable
      // Good Read: https://stackoverflow.com/questions/11508463/javascript-set-object-key-by-variable?noredirect=1&lq=1
      // This works in ES6 and Babel
      return {
        ...previousValue,
        [name]: value,
      };
      // return {
      //   ...previousValue,
      //   name: value, // this will be a separate key not actually value of name
      // };

      // before ES6
      // var key = "someKey";
      // var obj = {}
      // obj[key] = "some value"
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
          name="firstName"
          placeholder="First Name"
          value={contact["firstName"]}
          onChange={handleChange}
        />
        <input
          name="lastName"
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
