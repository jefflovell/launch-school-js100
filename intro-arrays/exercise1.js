/*

In the following code, what are the final length values for array1, array2, array3, array4, and array5?

Copy Code
let array1 = [1, 2, undefined, 4];

let array2 = [1];
array2.length = 5;

let array3 = [];
array3[-1] = [1];

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;

let array5 = [];
array5[100] = 3;

*/

//1. array1.length = 4.  All elements count toward the length of the array. The fact that array1[2] = undefined is superfluous.
//*CORRECT*

//2. array2.length = 5.  Even uninitialized elements are counted by the .length property.
//*CORRECT*

//3. array3.length = 1.  The uninitialized value is counted by the .length property but -1 is an Object.key value, not and is not counted valid by .length.
//*INCORRECT*  -> Seems odd but the length is actually 0.  I would think that since empty arrays with an arbitrary length are filled with empty elements an empty array would be instantiated with 1 empty element.  But no, they are just empty.

//4. array4.length = 3.  When the .length is assigned as < the number of original elements the array is truncated, so array4[3] and array4[4] are destroyed.
//*CORRECT*

//5. array5.length = 101. An uninitialized element is created for every index between [0] and [99], inclusive.  array4[100] is assigned as 3, so the array has 101 elements starting at 0.
//*CORRECT*