/*
Add a qux property with value 3 to the myObj object we created in the previous exercise. Now, examine the following code snippets:

Snippet 1Copy Code
let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});
Snippet 2Copy Code
for (let key in myObj) {
  console.log(key);
}
Without running this code, can you determine whether these two snippets produce the same output? Why?
*/

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj.qux = 3;

/*

-> Snippet1
<- 'qux'

-> Snippet2
<- 'foo'
<- 'bar'
<- 'qux'

this is because Object.keys only returns myObj's own keys as an array, but a for/in loop iterates over myObj protoype (myProtoObj) keys as well.

*/

/*
Solution
Copy Code
myObj.qux = 3;
Both snippets iterate over the keys of myObj. However, for..in iterates over all of the object's keys, including those in the prototype object, myProtoObj. Thus, snippet 2 logs:

Copy Code
qux
foo
bar
Snippet 1 iterates solely over myObj's "own" properties - that is, those defined directly on the object, not its prototype. Thus, it logs:

Copy Code
qux
We can add a conditional to snippet 2 to get the same output from for..in: all we need to do is check whether the key is myObj's own property:

Copy Code
for (let key in myObj) {
  if (myObj.hasOwnProperty(key)) {
    console.log(key);
  }
}
*/