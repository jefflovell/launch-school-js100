/*
Create a function removeLastChar that takes a string as an argument, and returns the string without the last character.

Copy Code
removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'
*/

function removeLastChar(string){
  return string.substring(0, string.length - 1);
}

/*
Solution
Copy Code
function removeLastChar(string) {
  return string.substring(0, string.length - 1);
}
Discussion
One of several ways to return only part of a string is to use the String.prototype.substring() method. It takes a start and end index as input and returns the part of the string that ranges from the start index to the end index (excluding the latter).

Make sure to not mix it up with the String.prototype.substr() method.
*/