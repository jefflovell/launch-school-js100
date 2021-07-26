/*
Use JavaScript's string methods on the string 'Captain Ruby' to produce the string 'Captain JavaScript'.
*/

let elCap = 'Captain Ruby';
let mutiny = elCap.replace('Ruby', 'Javascript');

console.log(elCap);
console.log(mutiny);

/*
Solution
Copy Code
'Captain Ruby'.replace('Ruby', 'JavaScript');
Discussion
There is more than one way to achieve this. Arguably the most straightforward one is to use the String.prototype.replace() method. Another possibility is to extract the first part of the input string, 'Captain', and concatenate it with 'JavaScript'. For example:

Copy Code
'Captain Ruby'.substring(0, 8) + 'JavaScript';
Or:

Copy Code
'Captain Ruby'.split(' ')[0] + ' JavaScript';
It is often the case that there is more than one way to achieve some result. Exploring different ways makes you more familiar with the language and can give you insights into possible trade-offs. Ultimately, we advise you to choose the solution that is easiest to understand.
*/
