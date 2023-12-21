import React from "react";
import CardComponent from "./Card";
import contacts from "../contacts";
import Avatar from "./CircularAvatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {/* See we can re-use the component anywhere */}
      <Avatar img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&usqp=CAU" />
      {/*  This can be solved with MAP */}
      <CardComponent
        name={contacts[0].name}
        imgURL={contacts[0].imgURL}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />
      <CardComponent
        name={contacts[1].name}
        imgURL={contacts[1].imgURL}
        phone={contacts[1].phone}
        email={contacts[1].email}
      />
      <CardComponent
        name={contacts[2].name}
        imgURL={contacts[2].imgURL}
        phone={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
