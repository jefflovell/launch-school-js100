/*
Let's generalize the function from the previous exercise a bit. Implement a function cite that takes two string arguments: the author of the quote and what they said. It then logs the quote to the console, as in the following example.

Copy Code
cite('Brendan Eich', 'Always bet on JavaScript.');
// logs:
// Brendan Eich said: "Always bet on JavaScript."
*/

function attribute(quote, person){
  console.log(speaker + ' said: "' + quote + '"');
}

/*
function cite(author, quote) {
  console.log(author + ' said: "' + quote + '"');
}
Or, using a template literal:

Copy Code
function cite(author, quote) {
  console.log(`${author} said: "${quote}"`);
}
*/