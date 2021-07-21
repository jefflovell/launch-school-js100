/*
Determine what the following code snippet logs. First solve it in your head or on paper, and only then run it in your JavaScript console to check the result.

Copy Code
let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving);
Bonus question: Do we need the parentheses in the boolean expression or could we also have written the following?

Copy Code
let isMoving = brakingForce < acceleration && speed > 0 || acceleration > 0;
*/

//true.  the evaluation is (true) && (true) which is true.
//we need the parens because logical AND '&&' has higher precedence than logical OR || which means if speed > 0 ever evaluates to false then the expression will evaluate false even if acceleration > 0 evaluates true.

/*
The code outputs true.

Bonus question: Yes, we do need the parentheses, because && has a higher operator precedence than ||, so:

Copy Code
brakingForce < acceleration && speed > 0 || acceleration > 0
is equivalent to:

Copy Code
(brakingForce < acceleration && speed > 0) || acceleration > 0
Discussion
The provided code uses the logical or operator ||, which checks whether at least one of its operands is truthy, and the logical and operator &&, which checks whether both its operands are truthy.

In the above code, the operands are comparisons with the following values:

Copy Code
brakingForce < acceleration // true
speed > 0                   // false
acceleration > 0            // true
Therefore, our logical expression breaks down to true && (false || true). Since false || true evaluates as true and true && true evaluates as true as well, the value of isMoving is true.
*/