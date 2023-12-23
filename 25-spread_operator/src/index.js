import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// Understanding SPREAD(...) operator
// const citrus = ["Lime", "Lemon", "Orange"];
// // const fruits = ["Apple", "Banana", "Pineapple"];

// // if we want to push all citrus into fruits we can:
// // citrus.forEach((c) => {
// //   fruits.push(c);
// // });
// // console.log(fruits);

// // But much easier way to do it is SPREAD ...
// const fruits = ["Apple", "Banana", "Pineapple", ...citrus];
// console.log(fruits);

// // The position of the spread can be anywhere
// // const fruits = ["Apple", ...citrus, "Banana", "Pineapple"];
// // console.log(fruits);

// // Spread Operator can be used in objects also
// const fullName = {
//   fName: "James",
//   lName: "Bond",
// };

// const user = {
//   ...fullName,
//   id: 1,
//   email: "james@007.com",
// };

// // This will be a flattened object
// console.log(user); // {fName: 'James', lName: 'Bond', id: 1, email: 'james@007.com'}

// const nestedUser = {
//   fullName,
//   id: 1,
//   email: "james@007.com",
// };
// // This will be a Nested object
// console.log(nestedUser); 
// // {
//     "fullName": {
//         "fName": "James",
//         "lName": "Bond"
//     },
//     "id": 1,
//     "email": "james@007.com"
// }