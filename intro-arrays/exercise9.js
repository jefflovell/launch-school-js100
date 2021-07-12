/*

Without using a for, while, or do/while loop, write some code that checks whether the number 3 appears inside these arrays:

Copy Code
> let numbers1 = [1, 3, 5, 7, 9, 11];
> let numbers2 = [];
> let numbers3 = [2, 4, 6, 8];
Return true or false depending on each result.

*/

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function checkVals1(arr, num){
  let found = 0;
  arr.forEach(function(el){
    if(el === num){
      found += 1;
    }
  });
  if(found){
    return true;
  }
  return false;
}

/*

Thousand ways to skin a cat, I suppose.  I didn't bother to look at other array methods.  I guess the purpose of the question was to practice looking up documentation. 

> numbers1.includes(3);
= true

> numbers2.includes(3);
= false

> numbers3.includes(3);
= false

*/