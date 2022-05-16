const people = [
    { name: 'Wes', cool: true, country: 'Canada' },
    { name: 'Scott', cool: true, country: 'Merica' },
    { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
    console.log(person.name);
});

// &Console Methods
// console.table(people);
// console.error(people);
// function doALotOfStuff() {
// console.group('Doing some stuff');
// console.log("Hey I'm log");
// console.table('Hey I am table');
// console.warn('Hey I am warn');
// console.error('Hey I?m eror');
// console.groupEnd('Done');
// }

// &Callstack
//! stack trace will tell you what function called what function console will tell you
//! the exact order of the funcs execution and remember <anonymous> means it was called from the console
function bootstrap() {
    console.log('callstack');
    go();
}

// &Grabbing Elements
//! you can grab one specific element with the dollar symbol $('p') but you could grab
// !all of the actual elements on the page with double dollar symbol $$('p') also
// !$0 gives you the latest clicked Element, $1 the second lates and so on with numbers

// &Breakpoints
// !debugger in javascript or simply click on debugger tap in line you want to debug and reload the page, with this you could both pause or play each line of your code to do a better debug

// &Scope
// !allow us to sorta peer into what variables are.
// &Network Requests
//! this one is important to analyze website performance and so on

// &Break On Attribute
//! this attribute can be used when something in the dom changed to open debug at the exact element
// &Some Setup Code

function doctorize(name) {
    console.count(`running doctorize for ${name}`);

    return `Dr. ${name}`;
}

function greet(name) {
    doesntExist(); // cause an eror
    return `Hello ${name}`;
}

function go() {
    const name = doctorize(greet('Wes'));
    console.log(name);
}

const button = document.querySelector('#bigger');
button.addEventListener('click', (e) => {
    const newFontSize =
        parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
    e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
    const res = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            Accept: 'text/plain',
        },
    });
    const joke = await res.text();
    console.log(joke);
    return joke;
}