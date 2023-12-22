import React from "react";
import ReactDOM from "react-dom/client";
import cars from "./practice";

const root = ReactDOM.createRoot(document.getElementById("root"));

// using de-structure
// array de-structure
const [honda, tesla] = cars;

// object destructure with alias
const {
  speedStats: { topSpeed: teslaTopSpeed },
} = tesla;
const {
  speedStats: { topSpeed: hondaTopSpeed },
} = honda;

// alias destructure and object and array destructure
const { coloursByPopularity: [teslaTopColour] } = tesla;
const { coloursByPopularity: [hondaTopColour] } = honda;


root.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>
);

// import animals, { useAnimals } from "./data";

// // console.log(animals);

// // destructure array into variables of object arrays
// // should be unique names
// const [cat, dog] = animals;

// console.log(cat);
// console.log(dog);

// // destructure an object
// // the name should be exactly the keys of the object
// // const { name, sound } = cat;

// // console.log(name);
// // console.log(sound);

// // destructure an object with different keys
// // use alias concept (key: alias)
// const { name: some_name, sound: some_sound } = dog;

// console.log(some_name);
// console.log(some_sound);

// // destructure an object with default values(if not present)
// // use default concept (key = default_value)
// const { name = "some_name", sound = "some_sound" } = cat;

// console.log(name);
// console.log(sound);

// Nested object de-structure
// const { name, sound, feedingRequirements } = cat;

// console.log(feedingRequirements);

// const { food, water } = feedingRequirements;

// console.log(food);
// or simply
// const {
//   feedingRequirements: { food, water },
// } = cat;
// console.log(food);

// understand hooks-useState using destructuring
// const [animalName, makeSound] = useAnimals(cat);
// console.log(animalName);
// makeSound();
