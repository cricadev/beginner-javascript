const p = document.querySelector('p');
console.log(p);

// default funcionts
Math.random;
Math.max;
navigator.vibrate(200); // ms
scrollTo({ top: 1000, left: 0, behavior: 'smooth' });

// custom functions

// this is the function definition
let bill = 100;
const taxRate = 0.13;

function calculateBill() {
    // this is the fnction body

    // console.log('running calculate bill');
    const total = bill * 1 + taxRate;
    return total;
}

// function call
calculateBill();

const myTotal = calculateBill();
bill = 200;
// console.log(`Your total is ${myTotal}`);
// console.log(`Your total is ${calculateBill()}`);

function calculatorBill(billAmount, taxRat = 0.13, tipRate = 0.15) {
    console.log('running calculate bill');
    const total = billAmount + billAmount * taxRate + bill * tipRate;
    return total;
}

const myTotal1 = calculatorBill(200, 0.15);

function sayHiTo(first) {
    return `Hello ${first}`;
}
const greeting = sayHiTo('cricadev');

const myTotal3 = calculatorBill(40 * 324 + 4213 / 4, 0.15);

function doctor(name = '') {
    return `Dr. ${name}`;
}

function yell(name /* default value */ = 'Silly Goose') {
    return `Hey ${name.toUpperCase()}`;
}
// yell(doctor('sapo'));