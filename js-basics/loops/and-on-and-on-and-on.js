/*
The following code keeps looping forever. (You can hit Ctrl-C to stop it.) Why is that? Also modify it so that it stops after the first iteration.

Copy Code
for (let i = 0; ; i += 1) {
  console.log("and on");
}
*/

//it's missing the condition inside the for condition expression.  theres an initial value, and there's a step, but no condition.

for (let i = 0; i < 1; i += 1){
  console.log('halt!');
}

/*
The above code never terminates, because the condition of the for loop was left empty. In this case, JavaScript treats it as true.

One way to terminate the loop from within the body is to use the break statement:

Copy Code
for (let i = 0; ; i += 1) {
  console.log("and on");
  break;
}
*/