/*

Create a new object named myObj that uses myProtoObj as its prototype.

Copy Code
let myProtoObj = {
  foo: 1,
  bar: 2,
};

*/

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

/*
Solution
Copy Code
let myObj = Object.create(myProtoObj);
*/