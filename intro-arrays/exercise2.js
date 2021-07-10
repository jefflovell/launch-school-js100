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
let evens = myArray.filter( num => num % 2 === 0 );
evens.forEach(el => console.log(el));

//over engineered...I used the topics being discussed in the chapter.  they used a for loop.  lulz. 

/*

for (let i = 0; i < myArray.length; i += 1) {
  let value = myArray[i];
  if (value % 2 === 0) {
    console.log(value);
  }
}

Our approach is straightforward: we iterate over all the elements in the array and check whether each element is even. You can also use forEach and let JavaScript take care of the indexing:

Copy Code
myArray.forEach(function(value) {
  if (value % 2 === 0) {
    console.log(value);
  }
});

*/