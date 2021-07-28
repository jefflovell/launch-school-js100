/*
Before running any code, determine what difference there will be in the output of the two code snippets below (if any).

Snippet 1:

Copy Code
let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); // ?
Snippet 2:

Copy Code
let ocean = {};
let prefix = 'Indian';

ocean[prefix] = 'Pacific';

console.log(ocean); // ?
*/

/*
Solution
Snippet 1:

Copy Code
let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); // { prefix: 'Pacific' }
Snippet 2:

Copy Code
let ocean = {};
let prefix = 'Indian';

ocean[prefix] = 'Pacific';

console.log(ocean); // { Indian: 'Pacific' }
Discussion
One important difference between bracket notation and dot notation is that bracket notation accepts expressions, including variables. So while ocean.prefix in Snippet 1 adds a property 'prefix' to the ocean object, this is different on line 4 of Snippet 2. There we don't use the string 'prefix' but the variable prefix as key. That is, JavaScript looks up the value of prefix and uses it as the name of the property. Since the value of prefix is 'Indian', we are adding the property 'Indian' to the object. If we wanted to add a property 'prefix' using bracket notation, we would need to write ocean['prefix'].
*/
