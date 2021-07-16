/*

Which of the following values are valid keys for an object?

1
'1'
undefined
'hello world'
true
'true'

*/

// they are all valid, but 1 will be coerced to '1' and true to 'true' so answer 1 === answer 2 && answer 5 === answer 6.

/*
All the listed values are valid keys. Note, though, that JavaScript coerces the non-string key values to strings. Given the listed values, 1 and '1' represent the same key, as do true and 'true'. This equivalency will bite you at some point; it's inevitable, so be ready.

Copy Code
> let myObj = {}
> myObj[true] = 'hello'
> myObj['true'] = 'world'
> myObj[true]
= 'world'
*/