/*

Use reduce to compute the sum of the squares of all of the numbers in an array:

Copy Code
let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83
Note that 83 is 3*3 + 5*5 + 7*7.

Solution

*/

let array = [3, 5, 7];

function sumOfSquares(arr){
  let squares = arr.map(el => el * el);
  let sum = squares.reduce((accum, el) => accum + el, 0);
  return sum;
}

function sumOfSquares2(arr){
  return arr.reduce((accum, el) => accum + el * el, 0);
}