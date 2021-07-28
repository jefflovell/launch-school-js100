/*
Refactor the function below using arrow syntax. Line 9 should still log the same sentence.

Copy Code
const template = 'I VERB NOUN.';

function sentence(verb, noun) {
  return template
    .replace('VERB', verb)
    .replace('NOUN', noun);
}

console.log(sentence('like', 'birds'));
// logs: I like birds.
*/

const template = 'I VERB NOUN.';

let sentence = (verb, noun) => template.replace('VERB', verb).replace('NOUN', noun);

console.log(sentence('like', 'birds'));

/*
Solution
Copy Code
let sentence = (verb, noun) => template
  .replace('VERB', verb)
  .replace('NOUN', noun);
Discussion
Arrow functions were introduced in ES6 as a very concise way of writing JavaScript functions.

If the function body contains only one statement, the return keyword can be omitted. Note that it's the number of statements that counts, not the number of lines. In our case, we have one statement spreading over several lines.
*/