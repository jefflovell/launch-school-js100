/*
Implement a function catAge that takes a number of human years as input and converts them into cat years. Cat years are calculated as follows:

The first human year corresponds to 15 cat years.
The second human year corresponds to 9 cat years.
Every subsequent human year corresponds to 4 cat years.
For example:

Copy Code
catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32
*/

function catAge(age){
  if (age === 0) {
    return age;
  }else if (age === 1) {
    return 15;
  }else if (age === 2) {
    return 23;
  } else {
    return 23 + ((age - 2) * 4);
  }
}

/*
function catAge(humanYears) {
  switch(humanYears) {
    case 0:
      return 0;
    case 1:
      return 15;
    case 2:
      return 24;
    default:
      return 24 + (humanYears - 2) * 4;
  }
}
*/