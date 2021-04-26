/* 
* Identify the Constructors for each of the following methods and classify each method as either a 
* "Static" or a "Prototype" method:
*/

// substring
constructor:  String, 
type: Prototype

// create
constructor: Object,
type: Static

// fromCharCode
constructor: String,
type: Static

// slice
constructor: [TypedArray, Array, String, Blob],
type: Static

// toString
constructor: [Object, Number, Array],
type: Prototype

/*
* It might be that more than one constructor provides a method with a given name.Make sure you list them 
* all in your answer. You can limit your search for methods to the String, Object, Array, and Number
* constructors.
*/