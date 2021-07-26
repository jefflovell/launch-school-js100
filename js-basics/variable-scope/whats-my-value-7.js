/*
What will the following code log to the console and why? Don't run it until you have tried to answer.

Copy Code
let a = 1;

function myFunction() {
  console.log(a);
}

myFunction();
*/

// 1

/*
Solution
The code logs 1.

Discussion
The variable a declared in the let statement on line 1 is declared at the very top level of our code, so it is accessible from everywhere in the code, including from within the body of myFunction.
*/