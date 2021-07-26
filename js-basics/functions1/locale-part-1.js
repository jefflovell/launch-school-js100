/*
Write a function that extracts the language code from a locale. A locale is a combination of a language code, a region, and usually also a character set, e.g en_US.UTF-8.

Copy Code
extractLanguage('en_US.UTF-8');  // 'en'
extractLanguage('en_GB.UTF-8');  // 'en'
extractLanguage('ko_KR.UTF-16'); // 'ko'
*/

//the _ seems to be consistent and the language code always first so...

function gimmeLang(locale){
  return locale.split('_')[0];
}

/*
function extractLanguage(locale) {
  return locale.split('_')[0];
}

// Examples:
console.log(extractLanguage('en_US.UTF-8'));
console.log(extractLanguage('en_GB.UTF-8'));
console.log(extractLanguage('ko_KR.UTF-16'));
*/