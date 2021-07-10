/* 

Log all of the even values from myArray to the console.

Copy Code
let myArray = [1, 3, 6, 11, 4, 2,
               4, 9, 17, 16, 0];
Expected Output

Copy Code
6
4
2
4
16
0

*/

let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
let evens = myArray.filter( num => num % 2 = 0 );
evens.forEach(el => console.log(el));
