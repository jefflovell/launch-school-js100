/*
Write code that does the reverse, starting from a nested array of pairs and building an object.

Copy Code
let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }
*/

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

let person = Object.fromEntries(nestedArray);

/*
Solution
Copy Code
let person = {};

for (let i = 0; i < nestedArray.length; i++) {
  let pair = nestedArray[i];

  person[pair[0]] = pair[1];
}

console.log(person);
// { title: 'Duke', name: 'Nukem', age: 33 }
Alternative Solution

Copy Code
let person = Object.fromEntries(nestedArray);
console.log(person);
// { title: 'Duke', name: 'Nukem', age: 33 }
Discussion
Our solution simply iterates over the array and adds each two-element array to the object, using the first element as property name and the second element as value.

Our alternative solution uses Object.fromEntries, which was added to JavaScript in ES2019 (ES10).
*/