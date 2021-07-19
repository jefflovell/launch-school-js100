/*
Challenging Exercise This exercise has nothing to do with this chapter. Instead, it uses concepts you learned earlier in the book. If you can't figure out the answer, don't worry: this question can stump developers with more experience than you have.

Consider this code:

Copy Code
> let x = "5"
> x = x + 1
= "51"
Now, consider this code:

Copy Code
> let y = "5"
> y++
What gets returned by y++ in the second snippet, and why?
*/

//i got this wrong.  i said 6.  y is coerced to a number then incremented... but it returns 5. the answer is 5 because y is incremented but post-increment returns the ORIGINAL value not the incremented value. ++y would return 6. 

/*
The return value is the numeric value 5.

If you apply ++ to a string, JavaScript coerces it into a number. In this case, "5" gets coerced to the number 5. After coercion, it then increments the value to 6. However, the return value is 5 since the post-increment operator (y++) returns the original value of y, not the incremented value.

This shows that x++ is not the same thing as x = x + 1.
*/