/*
Convert the person object into a nested array nestedPerson, containing the same key-value pairs.

Copy Code
let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};
*/

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let nestedPerson = Object.entries(person);

/*
Solution
Copy Code
let nestedPerson = Object.entries(person);

console.log(nestedPerson);
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]
Discussion
Our solution leverages the Object.entries() method, which returns an array of a given's object key/value pairs. You can achieve the same using a for...in loop:

Copy Code
let nestedPerson = [];

for (let property in person) {
  nestedPerson.push([property, person[property]]);
}
*/