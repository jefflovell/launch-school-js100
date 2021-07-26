/*
localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'
Distinguish greetings for English speaking countries like the US, UK, Canada, or Australia in your implementation, and feel free to fall back on the language-specific greetings in all other cases, for example:

Copy Code
localGreet('fr_FR.UTF-8'); // 'Salut!'
localGreet('fr_CA.UTF-8'); // 'Salut!'
localGreet('fr_MA.UTF-8'); // 'Salut!'
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

function gimmeLang(locale){
  let hello = {
    en: 'Hi!',
    fr: 'Salut!',
    pt: 'Olá!',
    de: 'Hallo!',
    sv: 'Hej!',
    af: 'Haai!'
  }
  let language = locale.split('_')[0]
  let region = locale.split('_')[1];
}

function localGreet(locale) {
  let language = extractLanguage(locale);
  let region = extractRegion(locale);

  switch (region) {
    case 'US': return 'Hey!';
    case 'GB': return 'Hello!';
    case 'AU': return 'Howdy!';
    default: return greet(language);
  }
}