/*
Take a look at the code below. Without running it, determine what it will log to the console. If you're not sure, refer to the MDN documentation on switch statements.

Copy Code
let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
  case 'squirrel':
    console.log('nook nook');
  case 'horse':
    console.log('neigh');
  case 'bird':
    console.log('tweet tweet');
  default:
    console.log('*cricket*');
}
*/

// Answer: 'neigh' 'tweet tweet' '*cricket*'

/*
Because the value of animal is 'horse', the following is logged to the console:

Copy Code
neigh
tweet tweet
*cricket*
Discussion
The switch statement evaluates the provided expression (animal in our case) and will execute the statement associated with the case that matches, as well as the statements in all cases following the matching case until reaching either the end of the switch statement or a break.

In the provided code, this means that after finding a matching case ('horse'), JavaScript will execute console.log('neigh') as well as the console.log invocations in all following clauses.

In order to avoid this "fall through" behavior, we can place a break statement in each clause of our switch statement, as seen below:

Copy Code
let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
    break;
  case 'horse':
    console.log('neigh');
    break;
  case 'bird':
    console.log('tweet tweet');
    break;
  default:
    console.log('*crickets*');
}
*/