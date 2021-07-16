/*
What does the following program log to the console? Why?

Copy Code
let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);
*/

//foo.a logs 'hi'
//qux logs 'hi'

//shit...qux is a string which is immutable so it creates a new var qux inside the function's scope which is destroyed on exit.  qux logs the original value of 'hello'

/*
let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);
*/