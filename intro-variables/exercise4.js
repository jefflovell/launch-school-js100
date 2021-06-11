/*
What happens when you run the following code? Why?

Copy Code
const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);
*/

// The program runs until it hits NAME = 'Joe'; then throws an error. NAME is a constant and can't be reassigned.