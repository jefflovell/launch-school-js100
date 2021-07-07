/*
Does the following code produce an error? Why or why not? What output does this code send to the console?

Copy Code
for (let i = 0; i < 5;) {
  console.log(i += 1);
}
*/

/*

The code doesn't produce an error since all 3 components of the for loop are optional. In this code, we omit the "next value" component; however, this isn't a problem here since we increment the loop variable on line 2.

The code outputs the following:

1
2
3
4
5
Although i is 0 on the first iteration, the loop logs 1 during that iteration since i += 1 increments i before console.log gets to log anything. i += 1 also returns the new value of i (1), and that's what gets passed to console.log. Similar actions occur on each iteration: the output is always 1 greater than the initial value of i, and i += 1 takes care of incrementing i to the next higher number, then passes that value to console.log.

*/