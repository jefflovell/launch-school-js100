/*
Take your code from the previous exercise and rewrite the conditional so that it uses the ternary if-then-else operator.
*/

let randomNumber = Math.round(Math.random());

console.log(randomNumber ? 'Yes!' : 'No.');

/*
Solution
Copy Code
let randomNumber = Math.round(Math.random());

console.log(randomNumber ? 'Yes!' : 'No.');
Discussion
The syntactical structure of the ternary operator is like so:

Copy Code
condition ? expression1 : expression2
If the condition provided is truthy, expression1 will be evaluated. If the condition is falsy, expression2 will be evaluated.

You may have come up with a solution like the following:

Copy Code
randomNumber ? console.log('Yes!') : console.log('No.');
This is a perfectly fine solution. Ours is an alternative that uses the ternary operator only to decide on the string that is going to be logged. Take a close look at it: The expression randomNumber ? 'Yes!' : 'No.' evaluates to either the string 'Yes!' or the string 'No.'. Since it is an expression that evaluates to a string value, we can use it as an argument to console.log. It's similar to using other complex expressions with operators, as in console.log('Hello' + 'World').
*/