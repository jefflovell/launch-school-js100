/*
Predict the output of the below code. When you run the code, do you see what you expected? Why or why not?

Copy Code
let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);
*/

//expected false => The value of array1 is a reference that will always be different from array2 unless they were aliased (array2 = array1). comparison like what's intended above only works on primitives.

/*
Solution
The output of the sample code is false.

Discussion
Primitives, like strings or numbers, are compared by their value. For example, the two strings below are strictly equal:

Copy Code
console.log('2, 6, 4' === '2, 6, 4'); // true
Arrays, however, are objects and not primitives. JavaScript compares whether two objects are strictly equal by checking whether they are the same object, i.e. whether they reference the same location in memory. Since we constructed two array objects, one on line 1 and one on line 2, they don't have the same reference.

Note that if we alter our original code so that array2 references the same object as array1, our comparison logs true:

Copy Code
let array1 = [2, 6, 4];
let array2 = array1;

console.log(array1 === array2); // true
*/