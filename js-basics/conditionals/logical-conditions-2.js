/*
Predict the output of the following code:

Copy Code
if (true && false) {
  console.log('Yes!');
} else {
  console.log('No...');
}
*/

//The output will always be 'No...' because a conditional (boolean) can't be both true and false.

/*
Solution
The output will always be 'No...'.

Discussion
The condition provided to our if statement uses the logical and operator &&. Therefore the condition will return a truthy value only if both of its operands are truthy. Since false is not truthy, neither will be our condition.
*/