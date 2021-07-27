/*
Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.
*/

const string = 'launch school tech & talk';

function titleCase(string){
  return string.split(' ')
    .map(str => str.charAt(0).toUpperCase() + str.substring(1))
    .join(' ');
}

/*
let string = 'launch school tech & talk';
let words = string.split(' ');
let capitalizedWords = [];

for (let i = 0; i < words.length; i++) {
  let word = words[i];

  capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
}

capitalizedWords.join(' '); // 'Launch School Tech & Talk'
*/