/*
Use the arithmetic operators to determine the individual digits of a 4-digit number like 4936:

thousands place is 4
hundreds place is 9
tens place is 3
ones place is 6

*/

function digitCalc(number) {
  let ones = number % 10;
  number = (number - ones) / 10;
  let tens = number % 10;
  number = (number - tens) / 10;
  let hundreds = number % 10;
  number = (number - hundreds) / 10;
  let thousands = number % 10;
  console.log("ones is " + ones);
  console.log("tens is " + tens);
  console.log("hundreds is " + hundreds);
  console.log("thousands is " + thousands);
}