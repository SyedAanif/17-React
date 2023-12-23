import React, { useState } from "react";
import ListItemComponent from "./ToDoItem";
import InputComponent from "./InputArea";

function App() {
  const [listItems, setListItems] = useState([]);

  function handleClick(item) {
    // Either do this to get hold of previous values
    // listItems.push(item);
    // setListItems(listItems);

    // Or use spread with previous values and current item
    setListItems((previousValues) => {
      return [...previousValues, item];
    });
  }

  // this function gets passed over as props to child component
  // and gets invoked from events in child component
  function deleteItem(id) {
    // console.log(id);
    // console.log("Deleted");

    // filter all values from previous-values where index is not equal to id passed
    setListItems((previousValues) => {
      return previousValues.filter((_, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputComponent click={handleClick} />
      <div>
        <ul>
          {/* {listItems.map((todo) => (
            <li>{todo}</li>
          ))} */}
          {/*  from parent component we can pass over functions as PROPS */}
          {/* generally we should not use index as id --> React advice */}
          {/* use UUID-> Universally Unique Identifier */}
          {listItems.map((todo, index) => (
            <ListItemComponent
              key={index}
              id={index}
              todoItem={todo}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
