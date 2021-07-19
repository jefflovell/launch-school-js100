/*

Given a list of numbers, write some code to find and display the largest numeric value in the list.

List	Max
1, 6, 3, 2	6
-1, -6, -3, -2	-1
2, 2	2

*/

function maxInRange(array){
  let max = array[0];
  array.forEach(function(element){
    if (element > max){
      max = element;
    }
  });
  return max;
}

console.log(maxInRange([1, 6, 3, 2, 6]));
console.log(maxInRange([-1, -6, -3, -2, -1]));
console.log(maxInRange([2, 2, 2]));

/*
haha...oops...back to reading documentation again...oh well.  I wrote my own Math.max() method.
console.log(Math.max(1, 6, 3, 2));      // => 6
console.log(Math.max(-1, -6, -3, -2));  // => -1
console.log(Math.max(2, 2));            // => 2
*/