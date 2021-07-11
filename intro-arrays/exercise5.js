/* 

Write a findIntegers function that takes an array argument and returns an array that contains only the integers from the input array. Use the filter method in your function.

Example

Copy Code
let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]

You can use Number.isInteger(value) to determine whether a numeric value is an integer. It returns true if the value is an integer, false otherwise.

*/

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false, 9, 17];

// function findIntegers(arr) {
//   let ints = []
//   arr.forEach(function(el){
//     if(Number.isInteger(el)){
//       ints.push(el);
//     }
//   })
//   return ints;
// }
//Oops...said to use filter...

function findIntegers(arr){
  return arr.filter(el => Number.isInteger(el));
}

/*
Semanitically identical, I short cut with an arrow function. 

Solution
Copy Code
function findIntegers(array) {
  return array.filter(function(element) {
    return Number.isInteger(element);
  });
}
*/
