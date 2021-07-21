/*
Without running the below code, determine what will be logged to the console.

Copy Code
let sale = true;
let admissionPrice = !sale ? 5.25 : 3.99;

console.log('$' + admissionPrice);
*/

// $3.99. sale is true so the condition (!true) will log false. so the else clause will be executed.

/*
Solution
Copy Code
$3.99
Discussion
On line 2 of our code, admissionPrice is assigned to the value of the ternary if-then-else statement. Note that sale was assigned to true on line 1, and the condition in the ternary statement prepends this with the logical not operator !. The logical not operator returns false when its operand (in our case sale) is truthy. The condition that is checked is therefore false, and thus admissionPrice is assigned to the value of the second operand (3.99) of our ternary statement.
*/