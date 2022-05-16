// Make a div
// add a class of wrapper to it
// put it into the body
// make an unordered list
// add three list items with the words "one, two three" in them

// put that list into the above wrapper
const myHtml = `    <div class="wrapper">
                    <ul>Fruits
                    <li>Banana</li>
                    <li>Watermelon</li>
                    <li>Apple</li>
                    </ul>
                    </div>`;

const myFragment = document.createRange().createContextualFragment(myHtml);
document.body.appendChild(myFragment);

console.log(myFragment);

// create an image

// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper
const myImg = document.createElement('img');
myImg.classList.add('cute');
const desc = `Cute Puppy`;
const width = 250;
myImg.src = `https://picsum.photos/${width}?grayscale`;
myImg.alt = `image of a ${desc}`;
const myLi = document.querySelector('li');
myLi.appendChild(myImg);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above

const ul = document.querySelector('ul');

const myDivHtml = `<div>I'm a div
                    <p>I'm a paragraph</p>
                    <p>I'm a paragraph</p>
                    </div> `;
ul.insertAdjacentHTML('beforebegin', myDivHtml);
// add a class to the second paragraph called warning
const myParagraph = document.querySelectorAll('p')[1];
myParagraph.classList.add('warning');
// remove the first paragraph
myParagraph.previousElementSibling.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would
// be a tall dog!</p>
// </div>
function generatePlayerCard(name = 'cris', age = 17, height = 165) {
    const ageInDog = age * 5 + 10;
    const myHtml = `<div class="playerCard">
                         <h2>${name} — ${age}</h2>
                         <p>S/he is ${height}cm and ${age} years old.
                          In Dog years this person would be ${ageInDog}. 
                          That would be a tall dog! </p>
                            <button class="delete" type="button" >&timesDelete</button>
                          </div>`;
    return myHtml;
}

// make a new div with a class of cards
const newDiv = document.createElement('div');
newDiv.classList.add('cards');

// Have that function make 4 cards
const card1 = generatePlayerCard('Cricadev', 17, 165);
const card2 = generatePlayerCard('Stefanny', 18, 160);
const card3 = generatePlayerCard('Suarez', 18, 166);
const card4 = generatePlayerCard('Tovar', 18, 178);
// append those cards to the div
newDiv.insertAdjacentHTML('afterbegin', card1);
newDiv.insertAdjacentHTML('afterbegin', card2);
newDiv.insertAdjacentHTML('afterbegin', card3);
newDiv.insertAdjacentHTML('afterbegin', card4);
// put the div into the DOM just before the wrapper element
const myWrapper = document.querySelector('.wrapper');
myWrapper.insertAdjacentElement('beforebegin', newDiv);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
const buttons = document.querySelectorAll('.delete');

// make out delete function
function deleteCard(event) {
    const buttonGotClicked = event.currentTarget;
    console.log(buttonGotClicked);
    // buttonGotClicked.parentElement.remove(); //&it will delete only the parent if for some reason we change the parent it will delete another thing we don't want to.
    // !OR
    buttonGotClicked.closest('.playerCard').remove();
}
// select all the buttons!

// loop over them and attach a listener
buttons.forEach((button) => button.addEventListener('click', deleteCard));