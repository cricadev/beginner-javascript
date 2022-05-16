//! HOISTING IS VARIABLE DECLARATIONS AND FUNCTIONS DECLARATIONS THAT ARE HOSTED TO THE TOP OF THE FILE ONLY THE FUNCTION  DECLARATIONS, REGULAR VARIABLE AND FUNCTIONS DECLARATIONS ARE HOSTED, NOT ARROW NOT EXPRESSION ONES...

console.log(age);
console.log(cool);
var age = 10;

// &What does this file do?
sayHi();

// &How does this file do it
function sayHi() {
    console.log('hey');
    console.log(multiply(24, 2));
}

function multiply(a, b) {
    return a * b;
}