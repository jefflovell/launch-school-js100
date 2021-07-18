/*

What does this code log to the console? Why?

Copy Code
let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);
Solution

*/

//[1,4,3]
// because only the reference to array1 is copied when array2 is assigned on line 7 and only the index value is reassigned on line 8, array1 and array2 are still aliases at invocation on line 9

/*
The code outputs:

Copy Code
[ 1, 4, 3]
This result demonstrates that array1 and array2 reference the same array: if we change an element using array1, it also changes that element in array2. The opposite is also true: if we change an element in array2, that also changes the element in array1.

This code also demonstrates that assignment of an array to another array doesn't create a new array, but instead copies a reference from the original array (array1 above) into the target array (array2).
*/