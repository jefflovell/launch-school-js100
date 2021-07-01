/*
What does the following code log to the console, and why?
*/

function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

// Output => Product2
//           Product3
//           Product not found!

// Explanation => Once serial hits case '113' it executes the console.log.  Because there is no break statement, it executes each additional clause as it falls through.  Execution ends with the default case.


/*
Given Solution:
The output is:

Copy Code
Product2
Product3
Product not found!
Since the case clauses of the switch statement lack break statements, control falls through from the matching case '113' clause and executes the code in the case '142' and default clauses as well. JavaScript doesn't care that the criteria for extra case clauses don't match our serial value. This fall-through behavior is often undesirable. To avoid it, you must add break statements to each case clause:

Copy Code
function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
      break;
    case '113':
      console.log('Product2');
      break;
    case '142':
      console.log('Product3');
      break;
    default:
      console.log('Product not found!');
  }
}
*/