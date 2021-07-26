/*
Write a function that takes an ISO 639-1 language code and returns a greeting in that language. You can take the examples below or add whatever languages you like.

Copy Code
greet('en'); // 'Hi!'
greet('fr'); // 'Salut!'
greet('pt'); // 'Olá!'
greet('de'); // 'Hallo!'
greet('sv'); // 'Hej!'
greet('af'); // 'Haai!'
*/

function polyglot(lang){
  let hello = {
    en: 'Hi!',
    fr: 'Salut!',
    pt: 'Olá!',
    de: 'Hallo!',
    sv: 'Hej!',
    af: 'Haai!'
  }
  return hello[lang];
}

// my way is SUPERIOR!

/*
function greet(languageCode) {
  switch (languageCode) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
  }
}

// Example:
console.log(greet('sv'));
Discussion
By now you are probably familiar with switch statements. Note that if we use return statements in the clauses, we don't need to include additional break statements, because return will immediately exit from the function anyway.
*/