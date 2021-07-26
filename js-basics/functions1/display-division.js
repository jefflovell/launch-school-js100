/*
Determine the output that the following code will log to the console.

Copy Code
function multiplesOfThree() {
  let divisor = 1;

  for (let dividend = 3; dividend <= 30; dividend += 3) {
    console.log(dividend + ' / ' + divisor + ' = 3');
    divisor += 1;
  }
}

multiplesOfThree;
*/

// It won't log, there's no invocation.  fixed, it will log all of the divisions that result in 3 between 3 and 30 inclusive e.g. 3/1 = 3, 6/2 = 3, 9/3 = 3 etc.

/*
Solution
There will be no output, because the function multiplesOfThree is not invoked.

Discussion
To invoke the function, we should append parentheses to the function name on line 10, like so:

Copy Code
multiplesOfThree();

// logs:
// 3 / 1 = 3
// 6 / 2 = 3
// 9 / 3 = 3
// ...
*/