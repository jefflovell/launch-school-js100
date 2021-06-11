/*
What happens when you run the following program? Why do we get that result?

Copy Code
{
  let foo = 'bar';
}

console.log(foo);
*/

//Error! foo can't be read because console.log is outside of the block containing foo's declaration (block scope).