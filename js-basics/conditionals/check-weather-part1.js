/*
Initialize a variable weather with a string value being "sunny", "rainy", or anything else.

Write an if statement that logs:

"It's a beautiful day!" if weather is assigned to the string "sunny",
"Grab your umbrella." if weather is assigned to the string "rainy", and
"Let's stay inside." otherwise.
Test your code with different values for weather.
*/

let weather = 'meh'; // 'sunny', 'rainy'

if (weather === 'sunny') {
  console.log("It's a beautiful day!");
} else if (weather === 'rainy') {
  console.log("Grab your umbrella.");
} else {
  console.log("Let's stay inside.");
}

/*
let weather = 'snow storm'; // 'sunny', 'rainy', ...

if (weather === 'sunny') {
  console.log("It's a beautiful day!");
} else if (weather === 'rainy') {
  console.log('Grab your umbrella.');
} else {
  console.log("Let's stay inside.");
}
Discussion
Note that we used the strict equality operator, ===, to determine if weather was 'sunny' or 'rainy'. If both of these comparisons return false, the else branch of our if statement will be executed.
*/