/*
Create a function that creates and returns a copy of an object. The function should take two arguments: the object to copy and an array of the keys that you want to copy. Do not mutate the original object.

The function should let you omit the array of keys argument when calling the function. If you do omit the argument, the function should copy all of the existing keys from the object.

Here are some examples for your reference:

Copy Code
let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }

*/

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(sourceObject, keysArray) {
  if(keysArray){
    let entries = Object.entries(sourceObject);
    let matchedArray = [];
    keysArray.forEach(function(keyEl){
      entries.forEach(function(entryEl){
        if(entryEl[0] === keyEl){
          matchedArray.push(entryEl);
        }
      })
    })
    return Object.fromEntries(matchedArray);
  }
  return Object.assign({}, sourceObject);
}

function copyObj(sourceObject, keys) {
  let destinationObject = {};

  if (keys) {
    keys.forEach(function(key) {
      destinationObject[key] = sourceObject[key];
    });
    return destinationObject;
  }
  return Object.assign(destinationObject, sourceObject);
}

copyObj(objToCopy, ['foo']);