/*
Write a function that compares the length of two strings. It should return -1 if the first string is shorter, 1 if the second string is shorter, and 0 if they're of equal length, as in the following example:

Copy Code
compareByLength('patience', 'perseverance'); // -1
compareByLength('strength', 'dignity');      //  1
compareByLength('humor', 'grace');           //  0
*/

function compareLength(str1, str2){
  let result = 0;
  if (str1.length > str2.length){
    result = 1;
  } else if (str1.length < str2.length){
    result = -1;
  }
  return result;
}

/*
Solution
Copy Code
function compareByLength(str1, str2) {
  if (str1.length < str2.length) {
    return -1;
  } else if (str1.length > str2.length) {
    return 1;
  } else {
    return 0;
  }
}
Discussion
Our solution uses a simple if statement that compares the length of the string arguments.

The kind of comparison we implemented here is called three-way comparison and is often used in sorting algorithms to determine the order of the values that are sorted.
*/