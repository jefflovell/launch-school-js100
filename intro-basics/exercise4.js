/*
Explain why this code logs '510' instead of 15.

console.log('5' + 10)
*/

// because the number 10 is being implicitly coerced to a String.  This is the default behavior of javascript when addition is performed on strings mixed with other data types.