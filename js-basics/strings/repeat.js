/*
Implement a function repeat that repeats an input string a given number of times, as shown in the example below; without using the pre-defined string method String.prototype.repeat().

Copy Code
repeat(3, 'ha'); // 'hahaha'
*/

function repeat(num, string){
  let result = '';
  for (let i = 0; i < num; i++){
    result += string;
  }
  return result;
}

/*
function repeat(n, string) {
  let repetitions = '';

  while (n > 0) {
    repetitions += string;
    n -= 1;
  }

  return repetitions;
}
*/