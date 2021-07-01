//What does this code output to the console?

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);

//Answer => Outputs 'Not Empty'.  Even an empty array is truthy so arr will return true. 

/*
Given Solution

The output is Not Empty since, while the array is empty -- it has no elements and the length property is 0 -- it isn't falsy. Thus, JavaScript executes the first branch of the if statement.
*/