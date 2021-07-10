/*
Let's make the problem a little harder. In this problem, we're again interested in even numbers, but this time the numbers are in nested arrays in a single outer array.

Copy Code
let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

*/

let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0]
];

myArray.forEach( function(el) {
  el.forEach( function(el) {
    if (el % 2 === 0) {
      console.log(el);
    }
  });
});

/*


for (let i = 0; i < myArray.length; i += 1) {
  for (let j = 0; j < myArray[i].length; j += 1) {
    let value = myArray[i][j];
    if (value % 2 === 0) {
      console.log(value);
    }
  }
}
Our approach is again straightforward, but it's a bit verbose. However, the chained brackets in myArray[i][j] make it visually explicit that we're dealing with a two-dimensional nested array.

As before, we can also use forEach to abstract away the messy details of indexes and stopping conditions:

Copy Code
myArray.forEach(function(nestedArray) {
  nestedArray.forEach(function(value) {
    if (value % 2 === 0) {
      console.log(value);
    }
  });
});
That's a bit complicated at this stage in your development, but have a go at trying to figure out how it works.

*/