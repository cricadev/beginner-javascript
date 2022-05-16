// Red (!)
// Blue (?)
// Green (*)
// Yellow (^)
// Pink (&)
// Purple (~)
// Mustard (todo)
// Grey (//)
// Commented out Code can also be Styled to make it Clear the Code shouldn't be There.
// Any Other Comment Styles you'd like can be Specified in the Settings.

// &FIRST CLASS CITIZEN

// !IT MEANS THAT JS FUNCTIONS ARE VALUES

// !function can be stored in variables

// !different ways to declare functions

// !functions without name are not a function

// *ANON FUNCTION
// function(firstName) {
// return `Dr. ${firstName}`;

// }

//

// console.log(doctor(), doctor2())

// !FUNCTION EXPRESSION

// const doctor = function(firstName = "cricadev") {
// doesntExist();
// return `Dr. ${firstName}`;
// }

// !function declaration
// function doctor2(first = "ola") {
// return `Dr. ${first}`;
// }

// !ARROW FUNCTIONS

const inchToCM = (inches) => `measure ${inches * 2.54} cm`;

const add = (a, b = 3) => a + b;

// returning an object

// !WHEN IT IS GOOD TO USE ARROW FUNCTIONS? it is easier to read ?
// function makeABaby(first, last) {
// const baby = {
// name: `${first} ${last}`,
// age: 0,
// }
// return baby;
// }

// const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// !IIFE
// *INMEDIATELY INVOKED FUNCTION EXPRESSION

(function(age) {
    console.log('RUnning the anon function');
    return `You are cool ${age}`;
})(10);

// !METHODS!!! are how we call functions in js
const wes = {
    name: `Wes Bos`,

    // !SHORT HAND METHOD
    sayHi() {
        console.log(`fuck you ${this.name}`);
        console.log(`Hey wes`);
        return `hey wes`;
    },
    // !ARROW FUNCTION
    wisperHi: () => {
        console.log(this);

        console.log(`Hi wess im a mouse`);
    },
};

// TODO CALLBACK FUNCTIONS
// !CLICK CALLBACK

const button = document.querySelector('#click');

function handleClick() {
    console.log('great clicking!');
}
button.addEventListener('click', () => {
    console.log('great job');
});

// !TIMER CALLBACK
setTimeout(wes.sayHi, 1000);
setTimeout(() => {
    console.log(`dinner's ready`);
}, 1000);