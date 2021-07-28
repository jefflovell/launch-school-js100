/*
Add a property to the below object, jane, so that the code on line 13 logs 'Hej, Bobby!' to the console.

Copy Code
let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  // add code here
};

jane.greet('Bobby'); // Hej, Bobby!
*/

let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  greet: function(name) {console.log(`Hej, ${name}!`)}
};

jane.greet('Bobby'); // Hej, Bobby!

/*
Solution
Copy Code
let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  greet: function(name) {
    console.log(`Hej, ${name}!`);
  },
};

jane.greet('Bobby'); // Hej, Bobby!
Discussion
A property value can be any valid expression, including a function expression. When the value is a function and it is invoked with an explicit caller, as seen on line 13, it is called method invocation. You will continue to learn much more about this in future lessons.
*/