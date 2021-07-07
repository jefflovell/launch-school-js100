/*

The following code causes an infinite loop (a loop that never stops iterating). Why?

Copy Code
let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

*/

//counter = 1 is an assignment, not a comparison, so it is always truthy.
//when we check if counter > 2 it is not, it is == 2.
//when the loop restarts counter is set back to 1, hence infinite loop.