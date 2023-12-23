import React from "react";

function ListItemComponent(props) {
  // capture functions passed from parent components
  return (
    // generally it would be UUID
    // if we do like this the function onCHecked gets called immediately on rendering
    // because of braces is a call to function onChecked()
    // <div onClick={props.onChecked(props["id"])}>

    // hence to tackle we have to separate out the function to be called on click
    <div
      onClick={() => {
        props.onChecked(props["id"]);
      }}
    >
      <li>{props["todoItem"]}</li>
    </div>
  );

  //   This state is localized to this component. What if we want to propagate the state,
  // to parent component and cause a change there.
  //   const [clickState, setClickState] = useState(false);

  //   function handleClick() {
  //     // clickState ? setClickState(false) : setClickState(true);

  //     // Alternatively
  //     setClickState((prevState) => {
  //       // opposite of previous value
  //       return !prevState;
  //     });
  //   }

  //   return (
  //     <div onClick={handleClick}>
  //       <li style={{ textDecoration: clickState ? "line-through" : "none" }}>
  //         {props["todoItem"]}
  //       </li>
  //     </div>
  //   );

  // this is state-less code as:
  // PROPS are read-only. hence we can't modify as per state of app
  //  return <li>{props["todoItem"]}</li>;
}

export default ListItemComponent;
