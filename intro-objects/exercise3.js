/*

Use object literal syntax (e.g., { key: value, ... } notation) to create an object that behaves as an array in a for statement. The object should contain at least 3 elements. You should place your code between the braces in the let statement:

Copy Code
let myArray = {
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

*/

let myArray = {
  length: 6
  0: 'hello!',
  1: 'I',
  2: 'am',
  3: 'an',
  4: 'array-like',
  5: 'object.'
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

/*

Solution
Copy Code
let myArray = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

Our array-like object isn't a perfect mimic of a regular JavaScript array, however. In particular, it doesn't modify the length property when you add or delete elements. It also doesn't support methods like forEach, filter, and push.

*/