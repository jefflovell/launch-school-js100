/*

This problem is more challenging than most in this book. Don't worry if you can't solve it on your own.

Write a function similar to the oddLengths function from Exercise 6, but don't use map or filter. Instead, try to use the reduce method.

Copy Code
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

Use an array as the accumulator. Ideally, you should be able to use the return value of reduce as the return value of the function.

*/

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr) {
  return arr.reduce(function(accumulator, element){
    if (element.length % 2 === 1) {
      accumulator.push(element.length);
    }
    return accumulator;
  }, []);
}