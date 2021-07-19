/*
Write a function that searches an array of strings for every element that matches the regular expression given by its argument. The function should return all matching elements in an array.

Example

Copy Code
let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
*/

function allMatches(array, regex){
  let matches = [];
  array.forEach(function(element){
    if(regex.test(element)){
      matches.push(element)
    }
  });
  return matches;
}

/*

function allMatches(words, pattern) {
  let matches = [];
  for (let index = 0; index < words.length; index += 1) {
    if (pattern.test(words[index])) {
      matches.push(words[index]);
    }
  }

  return matches;
}
Solution 2Copy Code
function allMatches(words, pattern) {
  return words.filter((word) => pattern.test(word));
}

*/