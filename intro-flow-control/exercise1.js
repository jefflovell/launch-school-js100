/*
What values do the following expressions evaluate to?

Copy Code
1. false || (true && false);
2. true || (1 + 2);
3. (1 + 2) || true;
4. true && (1 + 2);
5. false && (1 + 2);
6. (1 + 2) && true;
7. (32 * 4) >= 129;
8. false !== !true;
9. true === 4;
10. false === (847 === '847');
11. false === (847 == '847');
12. (!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;
*/

//1. false => true && false = false; false || false = false

//2. true => 1 + 2 = 3.  true || anyValue = true; short circuit, last operand evaluated is true.

//3. 3 => 1 + 2 = 3. 3 is truthy. truthy || anyValue = true. truthy values return the literal value. short circuit, last operand evaluated is 3.

//4. 3 => 1 + 2 = 3. 3 is truthy. true = true so evaluation continues. 3 is truthy.  truthy values return the literal value. last operand evaluated is 3.

//5. false => evaluation is short circuited when false is hit in a && statement.

//6. true => 1+2 = 3. 3 is truthy. evaluation continues and true is the last operand evaluated.

//7. false => 32 * 4 is 128.  128 is not greater or equal to 129.

//8. false => !true = false. false IS value equivalent to false.

//9. false => true is value equivalent to 4 due to type coersion but is not type equivalent.

//10. true => number 847 is not type + value equivalent to string 847 outputting false => false is type and value equivalent to false.

//11. false => number 847 is value equivalent to string 847 outputting true => false is type equivalent but is not value equivalent to true.

//12. true => true || false = true.
//    (!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;
//    (!true || (!20 === 20) || (82 === 82)) || false;
//    (!true || false || true) || false;
//    (false || false || true) || false;
//    true || false;

//12 out of 12:

/*
Expression	                                                          Value
false || (true && false)	                                            false
true || (1 + 2)	                                                      true
(1 + 2) || true	                                                      3
true && (1 + 2)	                                                      3
false && (1 + 2)	                                                    false
(1 + 2) && true	                                                      true
(32 * 4) >= 129	                                                      false
false !== !true	                                                      false
true === 4	                                                          false
false === (847 === '847')	                                            true
false === (847 == '847')	                                            false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false	        true
*/