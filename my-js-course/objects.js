// ! EVERYTHING IN JAVASCRIPT IS AN OBJECT, OBJECTS ALLOW US TO GROUP TOGETHER PROPERTIES AND VALUES OR KEYS AND VALUES, STORING RELATED DATA, FUNCTIONALITY OBJECTS ARE USED FOR WHERE THE ORDER OF THE PROPERTIES DOES NOT MATTER, IF WE WERE CREATING A PERSON
const age = 242;
const person = {
    age,
    name: 'wes',
    'cool-dude': true,
    'really cool': false,
    777: true,
    dog: 'snickers',
    clothing: {
        shirts: 10,
        pants: 2,
        wtf: {
            fuck: 'you',
        },
    },
    sayHello(greeting = 'hey') {
        return `${greeting} ${this.name}`;
    },
    // ! ARROW FUNCTIONS CANNOT ACCESS TO "THIS" KEYWORD IT ONLY TAKE US TO THE WINDOW
    sneeze() {
        console.log('aaaaaa chooo', this);
    },
};
person.job = 'Web Developer';
person.username = 'cricadev';
person.age = 20;
console.log(person.age);
// const propertyToCheck = prompt('what do you want to check?');
// console.log(propertyToCheck);
// console.log(person[propertyToCheck]);
const personFroze = Object.freeze(person);
console.log(person);
// you cannot find these string variables without this exact notation
console.log(person['cool-dude']);

const nameInput = document.querySelector(`[name="first"]`);

const name = nameInput ? nameInput.value : '';
console.log(name);

console.log(delete person.dog);

// ! A METHOD IS A FUNCTION THAT LIVES INSIDE OF AN OBJECT

let name1 = 'wes';
let name2 = 'wes';
console.log(name1 === name2);
name1 = 'scott';
console.log(name1 === name2);
// & update name1 to be what is name2
name1 = name2;
console.log(name1 === name2);
name2 = name1;
name2 = 'wesdtopher';

const person1 = {
    first: 'wes',
    last: 'bos',
    clothing: {
        shirts: 10,
        pants: 2,
    },
};

const person2 = {
    first: 'wes',
    last: 'bos',
};
// const person3 = person1; //! REFERENCE
// person3.first = 'larry';
// console.log(person3.first);
// console.log(person1.first);

// ?when objects and arrays are copied by reference, this means that we simply create a variable that references or points to the original variable instead of making a copy of it that can lead to unexpected bugs, so WHAT'S A DEVELOPER TO DO IF YOU WANT A COPY OF SOMETHING LIKE AN OBJECT, SOMETHING CALLED SPEREAD, SPREAD IS THE THREE DOT OPERATOR AND IT'S USED FOR TAKING EVERY SINGLE ITEM IN AN OBJECT AND SPREADING IN A NEW OBJECT.

// const person3 = {...person1 }; //! SHALLOW COPIES, THE Y WILL GO ONE LEVEL DEEP
// person3.first = 'Larry';
// person3.clothing.shirts = 100;
// ? IF YOU WANT A DEEP COPY OF AN OBJECT WE USE A LIBRARY CALLED LODASH
const person4 = _.cloneDeep(person1);
person4.first = 'Larry';
person4.clothing.shirts = 100;

const meatInventory = {
    bacon: 2,
    sausage: 3,
    oyster: 10,
};
const veggieInventory = {
    lettuce: 5,
    tomatoes: 3,
};

const inventory = {
    ...meatInventory,
    ...veggieInventory,
    oyster: 15,
    fish: 15,
};

// ! IF YOU PASS AN OBJECT INTO A FUNCTION AND YOU MODIFY THAT OBJECT, THE EXTERNAL WILL ALSO BE UPDATED, IT'S NOT THE CASE FOR BOOLEAN, NUMBERS AND STRINGS, BUT IT IS THE CASE FOR OBJECTS AND ARRAYS, MEANING THAT IF YOU MODIFY AN OBJECT OR AN ARRAY THAT IS PASSED IN A FUNCTION, KNOW THAT YOU MAY ACCIDENTALLY MODIFY VALUES OF THE OBJECT OR ARRAY

function doStuff(data) {
    data = 'something else';
    console.log(data);
}

function doStuff2(data) {
    data.tomatoes = 10000000000;
    console.log(data);
}
doStuff2(inventory);