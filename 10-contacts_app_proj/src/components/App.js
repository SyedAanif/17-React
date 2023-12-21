import React from "react";
import CardComponent from "./Card";
import contacts from "../contacts";

function createCard(contact) {
  // NOTE:: Each mapped element must have a unique id(React Virtual DOM)
  // Thus add a "key" field
  return (
    <CardComponent
      // this is for the uniqueness of the component and is internally used by React
      key={contact.id}
      name={contact.name}
      imgURL={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {/* converted anonymous function into named function
      Maps each element in the loop to object */}
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
