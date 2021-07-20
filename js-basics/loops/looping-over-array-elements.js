/*
Using the code below as a starting point, write a while loop that logs the elements of array at each index, and terminates after logging the last element of the array.

Copy Code
let array = [1, 2, 3, 4];
let index = 0;
*/

let array = [1, 2, 3, 4];
let index = 0;

while (index < array.length) {
  console.log(array[index]);
  index += 1;
}

/*
Solution
Copy Code
let array = [1, 2, 3, 4];
let index = 0;

while (index < array.length) {
  console.log(array[index]);
  index += 1;
}
Discussion
On line 5, we access the array element at the current index, and log the returned element to the console with console.log. Subsequently, we increment index by 1.

After each iteration of the loop, our while condition is evaluated. Since JavaScript arrays have a zero-based index, we want to terminate the loop when index is equal to array.length, because the last index of an array is always one less than the array's length.

*/