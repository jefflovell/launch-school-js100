/*

Let's try another variation on the even-numbers theme.

We'll return to the simpler one-dimensional array. In this problem, we want to use the map function to create a new array that contains one element for each element in the original array. If the element is an even value, then the corresponding element in the new array should contain the string 'even'; otherwise, the element in the new array should contain 'odd'.

Example

Copy Code
let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];
Expected Output

Copy Code
[
  'odd', 'odd', 'even', 'odd',
  'even', 'even', 'even', 'odd',
  'odd', 'even', 'even',
]
If you have trouble using map to accomplish this, try it using a regular for loop instead.

*/

let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let evenOrOdd = myArray.map( function(num) {
  if(num % 2 === 0) {
    return 'even';
  }
  return 'odd';
});

/*


let newArray = myArray.map(function(value) {
  if (value % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});
With a For Loop

Copy Code
let newArray = [];
for (let i = 0; i < myArray.length; i += 1) {
  let value = myArray[i];
  if (value % 2 === 0) {
    newArray.push('even');
  } else {
    newArray.push('odd');
  }
}
Our approach is again straightforward: we iterate over all the elements in the array and check whether each element is even. If it's even, we either return 'even' from the function we passed to map, or push 'even' onto the newArray. Otherwise, we return or push a value of 'odd'.

*/