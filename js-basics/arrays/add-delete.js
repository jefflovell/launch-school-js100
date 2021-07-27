/*
We are given the following array of energy sources.

Copy Code
let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
Remove 'fossil' from the array, then add 'geothermal' to the end of the array.
*/

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

energy.shift();
energy.push('geothermal');

/*
Adding an element:

Copy Code
energy.push('geothermal');
Removing an element:

Copy Code
energy.shift();
Or:

Copy Code
energy = energy.slice(1);
Or:

Copy Code
energy.splice(0, 1);
*/