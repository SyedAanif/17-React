import React from "react";
import FunctionalComponent from "./FunctionalComponent";
import ClassComponent from "./ClassComponent";

function App() {
  // both components are equivalent, but functional has less and mangeable code
  return <FunctionalComponent />;
  //   return <ClassComponent />;
}

export default App;
