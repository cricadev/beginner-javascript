//! global variables const and let are not available in window. on devtools, because they have a different scope than var which is totally globally const and let are function scope and block scope const cannot be reassigned while let and var can

/*eslint-disable*/
const first = 'Cris';
let second = 'Casallas';
var age = 100;

const sayHi = (name = "cricadev") => console.log(`Hey ${name}.`)

function sayHii(name = "cricadev") {
    console.log(`Hey marica ${name}`)
}
const edad = 100;

function go() {
    const hair = 'blonde'
    console.log(hair);
    console.log(edad);
}
go();
//!block scope {}
function isCool(name) {


    if (name === "Cris") {
        let cool = true;
    }
    console.log(cool);
    return cool;
}

const dog = 'snickers';

function logDog(dog) {
    // *const dog = WhateverYouPassedAsAnArgumentInTheFunction
    console.log(dog)
}

function goes() {
    const dog = 'sunny';
    logDog("gamin");
}

goes();

function sayHola(name) {
    function yell() {
        console.log(name.toUpperCase())
    }
    yell();
}
yell();
//!good practices basically don't create global variables they will overlap themselves at some point, functions are scoped exact the same way as variables, don't ever create global variables, const by default let if needed var in very specific cases