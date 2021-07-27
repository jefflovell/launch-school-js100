/*
Change your isBlank function from the previous exercise to return true if the string is empty or only contains whitespace. For example:

Copy Code
isBlank('mars'); // false
isBlank('  ');   // true
isBlank('');     // true
*/

function isBlank(string) {
  return string.trim().length === 0;
}

/*
Solution
Copy Code
function isBlank(string) {
  return string.trim().length === 0;
}
Discussion
The String.prototype.trim() method removes whitespaces from both ends of a string. Once we removed those whitespaces, we can use the same strategy as in the previous exercise.
*/
