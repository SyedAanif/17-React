const pi = 3.1416952;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}
// only one thing to export and what to export as default
export default pi;

// export other functions
export { doublePi, triplePi };
