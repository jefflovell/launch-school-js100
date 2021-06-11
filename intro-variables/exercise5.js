/*
Take a look at this code snippet:

Copy Code
let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);
What does this program log to the console? Why?
*/

//bar. foo's reassignment is scoped to the block containing it.  Since both foo = 'bar' and console.log(foo) are outside of the block, the reassignment is never read by console.log. 