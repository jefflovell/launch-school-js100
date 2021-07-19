/*
What does the following function do?

Copy Code
function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}
*/

//1 function doSomething takes a string argument
//2 that string is split by word into an array of strings i.e. it breaks a sentence into words.
//3 that array is reversed i.e. the sentence is now backwards (still in an array).
//4 the length of each word in the array is computed and returned as a new array.
//5 the new array of length values is returned by doSomething.

// doSomething takes a phrase/sentence and outputs an array of the lengths of each word in the input phrase/sentence in reverse order

/*
Solution
This code converts a string into an array of words, reverses that array, and then returns a new array that contains the lengths of the words. It assumes that a single space character delimits the words in the original string.

Thus:

Copy Code
console.log(doSomething("Pursuit of happiness")); // => [ 9, 2, 7 ]
*/