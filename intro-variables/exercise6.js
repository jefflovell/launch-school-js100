/*
const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);
*/

//nope.  It logs 'bar'. As far as console.log is concerned, FOO was never reassigned due to its block scope. 