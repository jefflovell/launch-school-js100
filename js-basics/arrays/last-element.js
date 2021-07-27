/*
Write a function that returns the last element of an input array. For example:

Copy Code
last(['Earth', 'Moon', 'Mars']); // 'Mars'
*/

function lastEl(array){
  return array[array.length - 1];
}

/*
Solution
Copy Code
function last(array) {
  return array[array.length - 1];
}
As in the previous exercise, last returns undefined if the input array is empty.
*/