/*
Loop over the elements of the array fish, logging each one. Terminate the loop immediately after logging the string 'Nemo'.

Copy Code
let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];
*/

let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for (i = 0; i < fish.length; i++){
  console.log(fish[i]);
  if (fish[i] === 'Nemo'){
    break;
  }
}

/*
Solution
Copy Code
let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for (let i = 0; i < fish.length; i += 1) {
  console.log(fish[i]);

  if (fish[i] === 'Nemo') {
    break;
  }
}
Discussion
When iterating over an array, it is a common pattern to loop over all indices in the array and access the elements one by one using the current index.

Because arrays are zero-indexed, there are two points that require care: The start index needs to be 0. And you need to terminate before you reach fish.length, because the last index is fish.length - 1.
*/