/*

Given the following code, how can you access the name of the person?

Copy Code
let person = {
  name:       'Bob',
  occupation: 'web developer',
  hobbies:    'painting',
};

*/

let person = {
  name:       'Bob',
  occupation: 'web developer',
  hobbies:    'painting',
};

person.name;
person['name'];

/*

Solution 1Copy Code
person.name;
Solution 2Copy Code
person['name'];

*/