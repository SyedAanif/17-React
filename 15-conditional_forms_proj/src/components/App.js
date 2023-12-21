import React from "react";
import Form from "./Form";

// toggle this to see change
var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      <Form isUserRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
