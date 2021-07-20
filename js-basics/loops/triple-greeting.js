/*
Write a loop that logs greeting three times.

Copy Code
let greeting = 'Aloha!';
*/
let greeting = 'Aloha!';

for (let i = 0; i < 3; i++){
  console.log(greeting);
}

let n = 0;
while (n < 3) {
  console.log(greeting);
  n += 1;
}

let i = 0;
do {
  console.log(greeting);
  i += 1;
} while (i < 3)

/*
Using a for loop:

Copy Code
let greeting = 'Aloha!';

for (let count = 1; count <= 3; count += 1) {
  console.log(greeting);
}
Using a while loop:

Copy Code
let greeting = 'Aloha!';
let count = 1;

while (count <= 3) {
  console.log(greeting);
  count += 1;
}
*/