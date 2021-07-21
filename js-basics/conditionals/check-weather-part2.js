/*
Take your code from the previous Check the Weather exercise and rewrite it as a switch statement. Feel free to add more cases besides 'sunny' and 'rainy'.
*/

let weather = 'sunny'; //rainy stormy meh

switch (weather) {
  case 'sunny':
    console.log("It's a beautiful day!");
    break;
  case 'rainy':
    console.log('Grab your umbrella.');
    break;
  case 'stormy':
    console.log('Hold on to your butts!');
    break;
  default:
    console.log("Let's stay inside.");
}

/*
switch (weather) {
  case 'sunny':
    console.log("It's a beautiful day!");
    break;
  case 'rainy':
    console.log('Grab your umbrella.');
    break;
  default:
    console.log("Let's stay inside.");
}
Discussion
Our switch statement evaluates the provided expression, weather, and when it finds a case clause matching the value of that expression, the code within that case clause is executed. If the value of the provided expression does not match any case clause, the default clause is executed.
*/
