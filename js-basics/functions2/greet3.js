/*
Now we are going to outsource the greeting and recipient to functions. Change the function greet from the previous exercise, so that it doesn't take any arguments, and instead calls the functions greeting and recipient defined below.

Copy Code
function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}
Calling greet() should log Good morning, Launch School! to the console.
*/

function greet() {
  console.log(greeting() + ', ' + recipient() + '!');
}

/*
Solution
Copy Code
function greet() {
  console.log(greeting() + ', ' + recipient() + '!');
}
Or, using a template literal:

Copy Code
function greet() {
  console.log(`${greeting()}, ${recipient()}!`);
}
*/