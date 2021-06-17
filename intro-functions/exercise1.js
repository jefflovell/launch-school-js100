/*
What does this code log to the console? Does executing the foo function affect the output? Why or why not?

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);
*/

// Outputs 1.  Bar = 2 is a new variable bar, constrained to its block scope within foo() and is initialized when foo() is invoked and destroyed when foo() returns and does not update the global variable bar. Because the value of global bar was never reassigned during invocation of foo(), the value of bar is unchanged in global scope because they are separate entities. console.log is invoked outside of foo()'s scope and the argument passed to var is accessing the globally scoped version of bar.
