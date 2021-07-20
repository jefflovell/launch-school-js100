/*
The code below logs the numbers from 1 to 10. Change it, so that it instead logs the numbers from 10 to 1 in decreasing order, and then logs 'Launch!'.

Copy Code
for (let i = 1; i <= 10; i += 1) {
  console.log(i);
}
*/

for(let i = 10; i >= 1; i -= 1){
  console.log(i);
}
console.log('Launch!');

/*
for (let i = 10; i > 0; i -= 1) {
  console.log(i);
}

console.log('Launch!');
This code logs:

Copy Code
10
9
8
7
6
5
4
3
2
1
Launch!
*/