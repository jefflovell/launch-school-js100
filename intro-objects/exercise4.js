/*

Create an array from the keys of the object obj below, with all of the keys converted to uppercase. Your implementation must not mutate obj.

Copy Code
let obj = {
  b: 2,
  a: 1,
  c: 3,
};
The order of the array does not matter.

*/

let obj = {
  b: 2,
  a: 1,
  c: 3,
};
let myArray = Object.keys(obj);
let upKeysArr = [];

myArray.forEach(function(element){
  upKeysArr.push(element.toUpperCase());
});

/*

Solution
Copy Code
let objKeys = Object.keys(obj);
let upperKeys = objKeys.map((key) => key.toUpperCase());
console.log(upperKeys); // => [ 'B', 'A', 'C' ]
console.log(obj); // => { b: 2, a: 1, c: 3 }
The challenge of this exercise is to figure out how to iterate through the properties of obj. We showed two ways in this chapter: for/in with hasOwnProperty() and Object.keys(). The former involves a bit more work, so we use Object.keys() combined with map() to extract and uppercase the keys into an array.

We can also use forEach, though it requires a bit more effort:

Copy Code
let upperKeys = [];
let objKeys = Object.keys(obj);
objKeys.forEach(function(key) {
  upperKeys.push(key.toUpperCase());
});
console.log(upperKeys); // => [ 'B', 'A', 'C' ]

*/