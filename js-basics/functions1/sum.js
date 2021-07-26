/*
Examine the example function invocation below. Write the function sum, such that it accepts two arguments and returns the sum of its arguments. You may assume that the function arguments will always be numbers.

Copy Code
sum(22, 10); // 32
*/

function sum(x, y){
  return x + y;
}

/*
function sum(num1, num2) {
  return num1 + num2;
}
Discussion
Our solution is straightforward: Within the function sum, we add both arguments.

Depending on how you run your code snippets, you might see the return value of sum(22, 10) in the console or not. If not, you can always invoke console.log to check it, e.g. by executing console.log(sum(22, 10)).
*/