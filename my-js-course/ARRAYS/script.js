const toppings = [
    "Mushrooms ",
    "Tomatoes",
    "Eggs",
    "Chili",
    "Lettuce",
    "Avocado",
    "Chiles",
    "Bacon",
    "Pickles",
    "Onions",
    "Cheese",
];
const students = [{
    id: "11ce",
    first_name: "Dall",
    last_name: "Puckring",
}, {
    id: "2958",
    first_name: "Margarete",
    last_name: "Brandi",
}, {
    id: "565a",
    first_name: "Bendicty",
    last_name: "Woodage",
}, {
    id: "3a16",
    first_name: "Micki",
    last_name: "Mattes",
}, {
    id: "f396",
    first_name: "Flory",
    last_name: "Gladeche",
}, {
    id: "de5f",
    first_name: "Jamill",
    last_name: "Emilien",
}, {
    id: "54cb",
    first_name: "Brett",
    last_name: "Aizikowitz",
}, {
    id: "9135",
    first_name: "Lorry",
    last_name: "Smallman",
}, {
    id: "978f",
    first_name: "Gilly",
    last_name: "Flott",
}, ];
const people = [{
    birthday: "April 22, 1993",
    names: {
        first: "Keith",
        last: "Buckley",
    },
}, {
    birthday: "January 3, 1975",
    names: {
        first: "Larry",
        last: "Heep",
    },
}, {
    birthday: "February 12, 1944",
    names: {
        first: "Linda",
        last: "Bermeer",
    },
}, ];
const buns = ["egg", "wonder", "brioche"];
const meats = {
    beyond: 10,
    beef: 5,
    pork: 7,
};
const prices = {
    hotDog: 453,
    burger: 765,
    sausage: 634,
    corn: 234,
};
const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];
const feedback = [{
    comment: "Love the burgs",
    rating: 4,
}, {
    comment: "Horrible Service",
    rating: 2,
}, {
    comment: "Smoothies are great, liked the burger too",
    rating: 5,
}, {
    comment: "Ambiance needs work",
    rating: 3,
}, {
    comment: "I DONT LIKE BURGERS",
    rating: 1,
}, ];
const faces = ["😃", "🤠", "🤡", "🤑", "😵", "🌞", "🐶", "😺"];
const inventory = [{
type: "shirt",
price: 4000,
}, {
type: "pants",
price: 4532,
}, {
type: "socks",
price: 234,
}, {
type: "shirt",
price: 2343,
}, {
type: "pants",
price: 2343,
}, {
type: "socks",
price: 542,
}, {
type: "pants",
price: 123,
}, ];
/*
                                                                                                                                                                                                  
                                                                                                                                                                                                  
function logTopping(topping, index, originalArray) {
    const nextTopping = originalArray[index + 1];
    const prevTopping = originalArray[index - 1];
    // log the topping
    console.log(topping);
    // log the prev topping if there is one
    prevTopping ? console.log(prevTopping) : null;
    // log the next topping if there is one
    nextTopping ? console.log(nextTopping) : null;
    // if its the last item in the array, say good bye
    index === originalArray.length - 1 ?
        console.log("Goodbye") :
        console.log("getting the next topping");
    index === originalArray.length && console.log("Goodbye");
    console.log("-- -- -- - 🍕 -- -- -- -- -- --");
}
toppings.forEach(logTopping);
// map, filter, reduce
console.clear();
function addArms(face) {
    return `👋${face}👋`;
}
const toys = faces.map(addArms);
console.log(toys);
function bosify(name) {
    return `${name} Bos`;
}
function capitalize(word) {
    return `${word[0].toUpperCase()}${word.slice(1)}`;
}
const fullNames = ["wes", "kait", "poppy"].map(capitalize).map(bosify);
console.log(fullNames);
const orderTotalsWithTax = orderTotals.map((total) => total * 1.13);
console.log(orderTotalsWithTax);
const cleanPeople = people.map((person) => {
    console.log(person);
    // get their birthday
    // timestamp
    const birthday = new Date(person.birthday).getTime();
    // now timestamp
    const now = Date.now();
    const age = Math.floor((now - birthday) / 31536000000);
    console.log(birthday, now, age);
    // gigure out how old are they
    // return their full name and bday in an object
    return {
        age,
        name: `${person.names.first} ${person.names.last}`,
    };
});
console.table(cleanPeople);
const over40 = cleanPeople.filter((person) => person.age > 40);
console.table(over40);
function findById(id) {
    return function isStudent(student) {
        return student.id === id;
    };
}
function findByProp(prop, propWeAreLookingFor) {
    return function isStudent(student) {
        return student[prop] === propWeAreLookingFor;
    };
}
const student = students.find(findByProp("id", "565a"));
const student2 = students.filter(findByProp("first_name", "Brett"));
console.log(student, student2);
// REDUCE!
console.clear();
function tallyNumbers(tally, currentTotal) {
    console.log(`The current tally is ${tally}`);
    console.log(`The current total is ${currentTotal}`);
    console.log("---------------------");
    // return thje current tally PLUS the amount of this order
    return tally + currentTotal;
}
const allOrders = orderTotals.reduce(tallyNumbers, 0);
console.log(allOrders);
function inventoryReducer(totals, item) {
    console.log(`loopingOver ${item.type}`);
    // increment the type by 1
    totals[item.type] ? totals[item.type]++ : (totals[item.type] = 1);
    return totals;
}
const inventoryCounts = inventory.reduce(inventoryReducer, {});
console.log(inventoryCounts);
const totalInventoryPrice = inventory.reduce(
    (acc, item) => acc + item.price,
    0
);
console.log(totalInventoryPrice);
// GRAB ALL THE TEXT FROM A WEB PAGE
// convert it in an array of letters so we gonna get rid of commas, and other characters, we don't care if it's upper or lower case
// count how many times each letter and number occurs
const text = `    Skip to main content
  Skip to select language
  References
  Guides
  MDN Plus
Search MDN
  References
  Array.prototype.reduce()
In this article
  Try it
  Syntax
  Description
  Examples
  Specifications
  Browser compatibility
  See also
Related Topics
  Standard built-in objects
  Array
  Properties
      Array.prototype[@@unscopables]
      Array.prototype.length
  Methods
      Array.prototype[@@iterator]()
      get Array[@@species]
      Array.prototype.at()
      Array.prototype.concat()
      Array.prototype.copyWithin()
      Array.prototype.entries()
      Array.prototype.every()
      Array.prototype.fill()
      Array.prototype.filter()
      Array.prototype.find()
      Array.prototype.findIndex()
      Array.prototype.flat()
      Array.prototype.flatMap()
      Array.prototype.forEach()
      Array.from()
      Array.prototype.groupBy()
      Array.prototype.groupByToMap()
      Array.prototype.includes()
      Array.prototype.indexOf()
      Array.isArray()
      Array.prototype.join()
      Array.prototype.keys()
      Array.prototype.lastIndexOf()
      Array.prototype.map()
      Array.of()
      Array.prototype.pop()
      Array.prototype.push()
      Array.prototype.reduce()
      Array.prototype.reduceRight()
      Array.prototype.reverse()
      Array.prototype.shift()
      Array.prototype.slice()
      Array.prototype.some()
      Array.prototype.sort()
      Array.prototype.splice()
      Array.prototype.toLocaleString()
      Array.prototype.toSource()
      Array.prototype.toString()
      Array.prototype.unshift()
      Array.prototype.values()
  Inheritance:
  Function
  Properties
      Function.arguments
      Function.caller
      Function.displayName
      Function.length
      Function.name
  Methods
      Function.prototype.apply()
      Function.prototype.bind()
      Function.prototype.call()
      Function.prototype.toSource()
      Function.prototype.toString()
  Object
  Properties
      Object.prototype.constructor
      Object.prototype.__proto__
  Methods
      Object.prototype.__defineGetter__()
      Object.prototype.__defineSetter__()
      Object.prototype.__lookupGetter__()
      Object.prototype.__lookupSetter__()
      Object.prototype.hasOwnProperty()
      Object.prototype.isPrototypeOf()
      Object.prototype.propertyIsEnumerable()
      Object.setPrototypeOf()
      Object.prototype.toLocaleString()
      Object.prototype.toSource()
      Object.prototype.toString()
      Object.prototype.valueOf()
Array.prototype.reduce()
The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The fina
The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is us
Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array:
Try it
The reducer walks through the array element-by-element, at each step adding the current array value to the result from the previous step (this result is the running sum of all the previous steps) 
Syntax
// Arrow function
reduce((previousValue, currentValue) => { /* ... */
})
reduce((previousValue, currentValue, currentIndex) => { /* ... */ })
reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ })
reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ }, initialValue)
    // Callback function
reduce(callbackFn)
reduce(callbackFn, initialValue)
    // Inline callback function
reduce(function(previousValue, currentValue) { /* ... */ })
reduce(function(previousValue, currentValue, currentIndex) { /* ... */ })
reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ })
reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ }, initialValue)
Parameters
callbackFn
A "reducer"

function that takes four arguments:
    previousValue: the value resulting from the previous call to callbackFn.On first call, initialValue
if specified, otherwise the value of array[0].
currentValue: the value of the current element.On first call, the value of array[0]
if an initialValue was specified, otherwise the value of array[1].
currentIndex: the index position of currentValue in the array.On first call, 0
if initialValue was specified, otherwise 1.
array: the array to traverse.
initialValue Optional
A value to which previousValue is initialized the first time the callback is called.If initialValue is specified, that also causes currentValue to be initialized to the first value in the arr
Return value
The value that results from running the "reducer"
callback

function to completion over the entire array.
Exceptions
TypeError
The array contains no elements and initialValue is not provided.
Description
The reduce() method takes two arguments: a callback

function and an optional initial value.If an initial value is provided, reduce() calls the "reducer"
callback

function on each element in the a
reduce() returns the value that is returned from the callback

function on the final iteration of the array.
When to not use reduce()
Recursive functions like reduce() can be powerful but sometimes difficult to understand, especially
for less experienced JavaScript developers.If code becomes clearer when using other array metho
Behavior during array mutations
The reduce() method itself does not mutate the array it is used on.However, it is possible
for code inside the callback

function to mutate the array.These are the possible scenarios of array mut
If elements are appended to the array after reduce() begins to iterate over the array, the callback

function does not iterate over the appended elements.
If existing elements of the array do get changed, the values passed to the callback

function
will be the values from the time that reduce() was first called on the array.
Array elements that are deleted after the call to reduce() begins and before being iterated over are not visited by reduce().
Edge cases
If the array only has one element(regardless of position) and no initialValue is provided, or
if initialValue is provided but the array is empty, the solo value will be returned without calling c
If initialValue is provided and the array is not empty, then the reduce method will always invoke the callback

function starting at index 0.
If initialValue is not provided then the reduce method will act differently
for arrays with length larger than 1, equal to 1 and 0, as shown in the following example:
    const getMax = (a, b) => Math.max(a, b);
// callback is invoked for each element in the array starting at index 0
[1, 100].reduce(getMax, 50); // 100
[50].reduce(getMax, 10); // 50
// callback is invoked once for element at index 1
[1, 100].reduce(getMax); // 100
// callback is not invoked
[50].reduce(getMax); // 50
[].reduce(getMax, 1); // 1
[].reduce(getMax); // TypeError
Examples
How reduce() works without an initial value
The code below shows what happens
if we call reduce() with an array and no initial value.
const array = [15, 16, 17, 18, 19];

function reducer(previous, current, index, array) {
    const returns = previous + current;
    return returns;
}
array.reduce(reducer);
The callback would be invoked four times, with the arguments and
return values in each call being as follows:
    callback iteration previousValue currentValue currentIndex array
return value
first call 15 16 1[15, 16, 17, 18, 19] 31
second call 31 17 2[15, 16, 17, 18, 19] 48
third call 48 18 3[15, 16, 17, 18, 19] 66
fourth call 66 19 4[15, 16, 17, 18, 19] 85
The value returned by reduce() would be that of the last callback invocation(85).
How reduce() works with an initial value
Here we reduce the same array using the same algorithm, but with an initialValue of 10 passed the second argument to reduce(): [15, 16, 17, 18, 19].reduce((previousValue, currentValue, currentIndex, array) => previousValue + currentValue, 10)
The callback would be invoked five times, with the arguments and
return values in each call being as follows:
    callback iteration previousValue currentValue currentIndex array
return value
first call 10 15 0[15, 16, 17, 18, 19] 25
second call 25 16 1[15, 16, 17, 18, 19] 41
third call 41 17 2[15, 16, 17, 18, 19] 58
fourth call 58 18 3[15, 16, 17, 18, 19] 76
fifth call 76 19 4[15, 16, 17, 18, 19] 95
The value returned by reduce() in this
case would be 95.
Sum all the values of an array
let sum = [0, 1, 2, 3].reduce(function(previousValue, currentValue) {
        return previousValue + currentValue
    }, 0)
    // sum is 6
Alternatively written with an arrow

function:
    let total = [0, 1, 2, 3].reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
    )
    Sum of values in an object array
    To sum up the values contained in an array of objects, you must supply an initialValue, so that each item passes through your

    function.
    let initialValue = 0
    let sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(function(previousValue, currentValue) {
        return previousValue + currentValue.x
    }, initialValue)
    console.log(sum) // logs 6
    Alternatively written with an arrow

    function:
    let initialValue = 0
    let sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(
        (previousValue, currentValue) => previousValue + currentValue.x, initialValue
    )
    console.log(sum) // logs 6
    Flatten an array of arrays
    let flattened = [
            [0, 1],
            [2, 3],
            [4, 5]
        ].reduce(
            function(previousValue, currentValue) {
                return previousValue.concat(currentValue)
            }, []
        )
        // flattened is [0, 1, 2, 3, 4, 5]
    Alternatively written with an arrow

    function:
    let flattened = [
        [0, 1],
        [2, 3],
        [4, 5]
    ].reduce(
        (previousValue, currentValue) => previousValue.concat(currentValue), []
    )
    Counting instances of values in an object
    let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']
    let countedNames = names.reduce(function(allNames, name) {
            if (name in allNames) {
                allNames[name]++
            } else {
                allNames[name] = 1
            }
            return allNames
        }, {})
        // countedNames is:
        // { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
    Grouping objects by a property
    let people = [
        { name: 'Alice', age: 21 },
        { name: 'Max', age: 20 },
        { name: 'Jane', age: 20 }
    ];

    function groupBy(objectArray, property) {
        return objectArray.reduce(function(acc, obj) {
            let key = obj[property]
            if (!acc[key]) {
                acc[key] = []
            }
            acc[key].push(obj)
            return acc
        }, {})
    }
    let groupedPeople = groupBy(people, 'age')
        // groupedPeople is:
        // {
        //   20: [
        //     { name: 'Max', age: 20 },
        //     { name: 'Jane', age: 20 }
        //   ],
        //   21: [{ name: 'Alice', age: 21 }]
        // }
    Bonding arrays contained in an array of objects using the spread operator and initialValue
        // friends - an array of objects
        // where object field "books" is a list of favorite books
    let friends = [{
            name: 'Anna',
            books: ['Bible', 'Harry Potter'],
            age: 21
        }, {
            name: 'Bob',
            books: ['War and peace', 'Romeo and Juliet'],
            age: 26
        }, {
            name: 'Alice',
            books: ['The Lord of the Rings', 'The Shining'],
            age: 18
        }]
        // allbooks - list which will contain all friends' books +
        // additional list contained in initialValue
    let allbooks = friends.reduce(function(previousValue, currentValue) {
            return [...previousValue, ...currentValue.books]
        }, ['Alphabet'])
        // allbooks = [
        //   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
        //   'Romeo and Juliet', 'The Lord of the Rings',
        //   'The Shining'
        // ]
    Remove duplicate items in an array
    Note: If you are using an environment compatible with Set and Array.from(), you could use
    let arrayWithNoDuplicates = Array.from(new Set(myArray)) to get an array where duplicate items have been r
    let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
    let myArrayWithNoDuplicates = myArray.reduce(function(previousValue, currentValue) {
        if (previousValue.indexOf(currentValue) === -1) {
            previousValue.push(currentValue)
        }
        return previousValue
    }, [])
    console.log(myArrayWithNoDuplicates)
    Replace.filter().map() with.reduce()
    Using Array.filter() then Array.map() traverses the array twice, but you can achieve the same effect
    while traversing only once with Array.reduce(), thereby being more efficient.(If you like
            for
            const numbers = [-5, 6, 2, 0, ];
            const doubledPositiveNumbers = numbers.reduce((previousValue, currentValue) => {
                if (currentValue > 0) {
                    const doubled = currentValue * 2;
                    previousValue.push(doubled);
                }
                return previousValue;
            }, []); console.log(doubledPositiveNumbers); // [12, 4]
            Running Promises in Sequence
            /**
             * Runs promises from array of functions that can return promises
             * in chained manner
             *
             * @param {array} arr - promise arr
             * @return {Object} promise object
             */
            function runPromiseInSequence(arr, input) {
                return arr.reduce(
                    (promiseChain, currentFunction) => promiseChain.then(currentFunction),
                    Promise.resolve(input)
                )
            }
            // promise function 1
            function p1(a) {
                return new Promise((resolve, reject) => {
                    resolve(a * 5)
                })
            }
            // promise function 2
            function p2(a) {
                return new Promise((resolve, reject) => {
                    resolve(a * 2)
                })
            }
            // function 3  - will be wrapped in a resolved promise by .then()
            function f3(a) {
                return a * 3
            }
            // promise function 4
            function p4(a) {
                return new Promise((resolve, reject) => {
                    resolve(a * 4)
                })
            }
            const promiseArr = [p1, p2, f3, p4]
            runPromiseInSequence(promiseArr, 10)
            .then(console.log) // 1200
            Function composition enabling piping
            // Building-blocks to use for composition
            const double = x => x + x
            const triple = x => 3 * x
            const quadruple = x => 4 * x
                // Function composition enabling pipe functionality
            const pipe = (...functions) => initialValue => functions.reduce(
                    (acc, fn) => fn(acc),
                    initialValue
                )
                // Composed functions for multiplication of specific values
            const multiply6 = pipe(double, triple)
            const multiply9 = pipe(triple, triple)
            const multiply16 = pipe(quadruple, quadruple)
            const multiply24 = pipe(double, triple, quadruple)
                // Usage
            multiply6(6) // 36
            multiply9(9) // 81
            multiply16(16) // 256
            multiply24(10) // 240
            Write map using reduce
            if (!Array.prototype.mapUsingReduce) {
                Array.prototype.mapUsingReduce = function(callback, initialValue) {
                    return this.reduce(function(mappedArray, currentValue, currentIndex, array) {
                        mappedArray[currentIndex] = callback.call(initialValue, currentValue, currentIndex, array)
                        return mappedArray
                    }, [])
                }
            }
            [1, 2, , 3].mapUsingReduce(
                (currentValue, currentIndex, array) => currentValue + currentIndex + array.length
            ) // [5, 7, , 10]
            Specifications Specification ECMAScript Language Specification# sec - array.prototype.reduce Browser compatibility Report problems with this compatibility data on GitHub desktop mobile server Chrome Edge Firefox Internet Explorer Opera Safari WebView Android Chrome Android Firefox
            for Android Opera Android Safari on iOS Samsung Internet Deno Node.js reduce Legend Full support Full support See also Polyfill of Array.prototype.reduce in core - js Array.prototype.reduceRight() Found a problem with this page ?
            Edit on GitHub Source on GitHub Report a problem with this content on GitHub Want to fix the problem yourself ? See our Contribution guide.Last modified : Mar 24, 2022, by MDN contributors Your blueprint
            for a better internet.MDN on Twitter MDN on Github MDN About Hacks Blog Careers Support Product help Report a page issue Report a site issue Our communities MDN Community MDN Forum MDN Chat Developers Web Technologies Learn Web Development MDN Plus Website Privacy Notice Cookies Legal Community Participation Guidelines Visit Mozilla Corporation’ s not -
            for -profit parent, the Mozilla Foundation.Portions of this content are© 1998– 2022 by individual mozilla.org contributors.Content available under a Creative Commons license.
            `;
function isValidChar(char) {
    return char.match(/[a-z0-9]/i);
}
const lowercase = (char) => char.toLowerCase();
function instanceCounter(count, char) {
    count[char] // if exist
        ?
        (count[char] = count[char] + 1) // if does not exist
        :
        (count[char] = 1);
    return count;
}
const result = text
    .split("") // split each char into an item of an array
    .filter(isValidChar) // passes through the function that filter chars
    .map(lowercase) // everything is converted into lowercase
    .reduce(instanceCounter, {}); // we count how many times each character appears and we passes it into an empty object
function sortByValue(a, b) {
    return a[1] - b[1];
}
const sortedResult = Object.entries(result).sort(sortByValue).reverse();
console.log(sortedResult);