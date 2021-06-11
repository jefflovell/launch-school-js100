/*
Write a dynamic greeter program named greeter.js (intro-input-output/exercise1.js). The program should ask for your name, then output Hello, {name}! where {name} is the name you entered:

Copy Code
$ node greeter.js
What is your name? Sue
Hello, Sue!
*/

//note. The curriculum uses node and the readline sync package to demonstrate this concept.

let readlineSync = require('readline-sync');
let name = readlineSync.question('What is your name? ');
console.log('Hello, ' + name + '!');