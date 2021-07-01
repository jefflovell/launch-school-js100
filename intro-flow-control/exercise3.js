/*
Let's improve our previous implementation of evenOrOdd. Add a validation check to ensure that the argument is an integer. If it isn't, the function should issue an error message and return.
*/

function evenOrOdd(num) {
  if (typeof num === typeof 1) {
    num % 2 === 0 ? console.log(num + ' is even.') : console.log(num + ' is odd.');
  } else {
    console.log(num + ' is a ' + typeof num + ', input must be a number.');
    return;
  }
};