/*
Write code that stores all of the vehicle property names in an array called keys.

Copy Code
let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};
*/

let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

let carKeys = [];
for (prop in vehicle){
  carKeys.push(prop);
}

/*
Solution
Copy Code
let keys = Object.keys(vehicle);

console.log(keys);
// ['manufacturer', 'model', 'year', 'range', 'seats']
Discussion
Our solution leverages the Object.keys() method, which returns an array of a given object's own properties. You can achieve the same by means of a for...in loop, pushing each object key into an array:

Copy Code
let keys = [];

for (let property in vehicle) {
  keys.push(property);
}
*/