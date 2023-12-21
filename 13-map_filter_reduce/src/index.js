import EmojiList from "./emojipedia";

var numbers = [3, 56, 2, 48, 5];

// NOTE:: These were introduced way before ES6
//MAP -Create a new array by doing something with each item in an array.
function mapCallBackFunction(x) {
  return x * 2;
}
const newNumbers = numbers.map(mapCallBackFunction);
console.log(newNumbers);

//  Equivalent of Map in for-each
// function forEachCallBackFunction(x) {
//   forNumbers.push(x * 2);
// }
// var forNumbers = [];
// numbers.forEach(forEachCallBackFunction);
// console.log(forNumbers);

// var ind = 0;
//FILTER - Create a new array by keeping the items that return true.
const filterNumbers = numbers.filter(function (num) {
  // console.log(ind++);
  return num > 10;
});

console.log(filterNumbers);

// equivalent filter in for-each
// const filterNumbers = [];
// numbers.forEach(function (num) {
//   if (num > 10) {
//     filterNumbers.push(num);
//   }
// });
// console.log(filterNumbers);

//REDUCE - Accumulate a value by doing something to each item in an array.
var sum = numbers.reduce(function (previousValue, currentValue) {
  console.log(previousValue, currentValue);
  //   previous value keeps on accumulating
  return previousValue + currentValue;
});
console.log(sum);

// for-each equivalent
// let sum = 0;
// numbers.forEach((num) => {
//   sum += num;
// });

// console.log(sum);

// NOTE:: These were introduced in ES6
//FIND - find the first item that matches from an array.
// let ind = 0;
const found = numbers.find((num) => {
  //   console.log(ind++);
  return num > 10;
});

console.log(found);

//FINDINDEX - find the index of the first item that matches.
const foundIndex = numbers.findIndex((num) => {
  //   console.log(ind++);
  return num > 10;
});

console.log(foundIndex);

// Work on Emoji List to get meaning of each emoji truncated to 100 characters
const truncatedList = EmojiList.map((emoji) => {
  return emoji["meaning"].substring(0, 100);
});

console.log(truncatedList);
