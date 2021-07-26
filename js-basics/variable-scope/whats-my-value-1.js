/*
What will the following code log to the console and why? Don't run it until you have tried to answer.

Copy Code
console.log(greeting);

var greeting = 'Hello world!';
*/

//undefined

/*
The code logs undefined.

Discussion
All variables in JavaScript declared with var are hoisted, meaning they are virtually moved to the beginning of the scope. This means that our code snippet above behaves like the following one:

Copy Code
var greeting;

console.log(greeting);

greeting = 'Hello world!'
When a var variable is declared but not assigned a value, like on line 1, it is initialized to the value undefined. For that reason, the code logs undefined to the console.
*/