/*
Write a function that checks whether a string is empty or not. For example:

Copy Code
isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true
*/

function isEmpty(string){
  if(string){
    return false;
  }
  return true;
}

/*
Solution
Copy Code
function isBlank(string) {
  return string.length === 0;
}
Discussion
A string is empty if it does not contain any characters. The easiest way to check this is to look at the length of the string.
*/