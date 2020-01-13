/**
 * Part 1:
 *    What will print and why?
 *    What will change if we delete line 15? Why?
 * 
 * Part 2:
 *    Change to ES6 syntax (use arrow functions and change var to let).
 * 
 * Part 3:
 *    Modify the code so that it prints 1, 2, 2, in that order. Do not move
 *        console logs.
 */

const x = () => {
  //let a = 2;
  console.log(a);
}

const y = () => {
  a = 2;
  console.log(a);
  x();
}

let a = 1;
console.log(a);
y();


/**
 * Part 1 Solution:
 * What's Printed:
 * 1
 * 2
 * undefined
 * 
 * The 1st row is 1 because the driver code on line 26 first runs and prints the value of a when it's initialized to 1.
 * The 2nd row is 2 because the function y is called and a is reinitialized to the value of 2 (local overrides global). Then it's printed on line 21.
 * The 3rd row is undefined because, when the function x is called on line 22, a is reinitialized but a is not given any value or assignment. 
 *  Therefore the third output is undefined.
 * 
 * What will change if we delete line 15:
 * the third output will be 1 because a is not reinitialized but references to the global scope value of 1. The assignment of a
 * to 2 in function y cannot be seen in the function x.
 * 
 * Part 2 & 3 Solution: Look to code above.
 * Arrow functions don't have their own contexts -- all is global.
 */