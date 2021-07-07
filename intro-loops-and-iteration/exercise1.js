/*

Modify the age.js program you wrote in the exercises for the Input/Output chapter. The updated code should use a for loop to display the future ages.

let readlineSync = require('readline-sync');
let age = readlineSync.question('How old are you? ');
age = parseInt(age);
console.log(`You are ${age} years old.`);
console.log(`In 10 years, you will be ${age + 10} years old.`);
console.log(`In 20 years, you will be ${age + 20} years old.`);
console.log(`In 30 years, you will be ${age + 30} years old.`);
console.log(`In 40 years, you will be ${age + 40} years old.`);

*/

let readlineSync = require('readline-sync');
let age = readlineSync.question('How old are you? ');

age = parseInt(age);

console.log(`You are ${age} years old.`);

for (let step = 10; step <= 40; step += 10) {
    console.log('In ' + step + ' years, you will be ' + (age + step) + ' years old.');
}
