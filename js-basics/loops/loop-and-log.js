/*

Loop and Log
Add some code inside of the for loop below that logs the current value of i to the console on each iteration. Before you run the code: What sequence of numbers do you expect to be logged?

Copy Code
for (let i = 0; i <= 10; i += 2) {
  // include your code here
}

*/

//I expect it to log 2, 4, 6, 8, 10 because i += 2 will add 2 to the current value of i on every iteration. i's value during the first iteration will be 0. It's value at the last iteration will be 10, since the step occurs after execution of the body block, i's value will step to 12 after 10 is logged and fail on the next iteration preventing execution of the for loop's body.

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

/* 
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}
This code logs:

Copy Code
0
2
4
6
8
10
*/