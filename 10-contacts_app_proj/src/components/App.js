import React from "react";
import CardComponent from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map((contact) => {
        return (
          <CardComponent
            name={contact.name}
            imgURL={contact.imgURL}
            phone={contact.phone}
            email={contact.email}
          />
        );
      })}
    </div>
  );
}

export default App;
