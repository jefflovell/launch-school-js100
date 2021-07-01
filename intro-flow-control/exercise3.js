/*
Let's improve our previous implementation of evenOrOdd. Add a validation check to ensure that the argument is an integer. If it isn't, the function should issue an error message and return.
*/

function evenOrOdd(num) {
  if (typeof num === typeof 1) { //handle data types other than nums
    if (num === 0) { //handle 0 and -0
      console.log(num + ' is neither even nor odd.')
    } else if (Number.isInteger(num)) { //handle non-int nums
      num % 2 === 0 ? console.log(num + ' is even.') : console.log(num + ' is odd.');
    } else {
      console.log('ERR: ' + num + ' is not an integer, input must be an integer.');
    }
  } else { //log the data type and request a number input
    console.log('ERR: ' + num + ' is a ' + typeof num + ', input must be an number.');
  }
};