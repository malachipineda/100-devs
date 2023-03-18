/*
Squaring a number
*/

// Square the given number x
function square1(x) {
  const square = x * x;
  return square;
}

console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25

// Square the given number x
const square2 = x => {
  const square = x * x;
  return square;
}

console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25
