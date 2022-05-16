//strings

const name = 'wes';
const middle = "topher";
const last = `bos`;

const sentence = "she's so cool";
const sentence2 = `She's so "cool"`;
console.log(sentence2);

const song = `Ohh
aa
aa
aa
a
a
aa
a
a`;
console.log(song);

// const hello = 'hello my name is ' + name + ". NIce to meet you";
// console.log(hello)

// const hello = `My name is ${name}. Nice to meet you. I am ${1+100} years old`;
// console.log(hello)

// const html = `<div>
// <h2>${name}</h2>
// <p>${hello}</p>
// </div>`;
// document.body.innerHTML = html;



//numbers
const smarties = 20;
const kids = 3;
const kidGets = Math.floor(smarties / kids);
const dadGets = smarties % kids;
console.log(`Each kid gets ${kidGets}`);

const price = 1030;
// Nan = not a number but is also a number in type of
// there is infinity and negative infinity in javascript


//OBJECTS
const person = {
    first: 'Cris',
    last: 'Casallas',
    age: 17,
};
// SNOBUSN = STRING NUMBER OBJECT BOOLEAN UNDEFINED SYMBOL NULL

let dog;
console.log(dog);
dog = 'snickers';

let somethingUndefined;
const somethingNull = null;

const cher = {
    first: 'cher'
};

const teller = {
    first: 'Raymond',
    last: 'Teller'
};

teller.first = '"teller"';
teller.last = null;

// booleans and equality

let isDrawing = false;
const age = 18;
const ofAge = age > 19;
console.log(ofAge);

age = 100;