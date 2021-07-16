/*
Write some code to replace the value 6 in the following object with 606:

Copy Code
let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};
You don't have to search the object. Just write an assignment that replaces the 6.
*/

obj.bar[3].xyz = 606;

/*
Solution
Solution 1Copy Code
obj.bar[3].xyz = 606;
Solution 2Copy Code
obj["bar"][3]["xyz"] = 606;
*/