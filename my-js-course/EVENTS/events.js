// &DOM ELEMENTS THEY EMIT EVENTS WHEN THEY DRAG WHEN THEY HOVER WE CAN ATTACH LISTENERS TO THIS EVENTS TO DO INTERESTING THINGS

const butts = document.querySelector('.butts');
const cool = document.querySelector('.cool');

// &go get something // &listen to something // &do something
function handleClick() {
    console.log('handleClick 🤿');
}
const hooray = () => console.log('hooray 💲');
butts.addEventListener('click', handleClick);
cool.addEventListener('click', hooray);
// & callback function  we provide the name to add to event listener and the browser will run the function when the event is listened

//! HANDLE BEFORE THE NAME TO MAKE REFERENCE TO A FUNCTION THAT IT HAS SOMETHING TO DO WITH AN EVENT LISTENER

//! ADVANTAGES OF HAVING THE FUNCTION OUTSIDE THE EVENT LISTENER: BASICALLY WE CAN REUSE THE SAME FUNCTION WHEREVER WE WANT INSTEAD OF HAVING DIFFERENT FUNCTIONS DOING THE SAME THING

//! BINDING ESSENTIALLY MEANS TAKING A FUNCTION AND LISTENING FOR A SPECIFIC CLICK AGAINST AN ELEMENT SO WE BOUND FUNCTIONS TO ELEMENTS  WITH ANONYM FUNCTIONS WE CANNOT REUSE IT AND REFERENCE IT SO WE CANNOT UNBIND IT

// listen on multiple items

const buyButtons = document.querySelectorAll('button.buy');

// function buyItem() {
// console.log('buying item');
// }

// function attachListener(buyButton) {
// buyButton.addEventListener('click', buyItem);
// }

// buyButtons.forEach(attachListener);

// buyButtons.forEach((button) => {
// button.addEventListener('click', () => {
// console.log('you clicked it');
// });
// });

function handleBuyButtonClick(event) {
    console.log(event);
    console.log('buy button clicked');
    // console.log(event.target);
    // console.log(event.target.dataset);
    // console.log(event.target.dataset.price);
    console.log(event.currentTarget);
    console.log(event.currentTarget === event.target);
    // ! STOP THIS EVENT FROM BUBBLING UP
    event.stopPropagation();
}
buyButtons.forEach((buyButton) => {
    buyButton.addEventListener('click', handleBuyButtonClick);
});
//! EVENT OBJECT IS FULLFILLED OF METHODS
// & EVENT.TARGET IS THE THING THAT ACTAULLY GOT THING, AND EVENT.CURRENTTARGET IS THE THING THAT FIRED THE EVENT LISTENER SO IN MOST CASES YOU PROBABLY WANNA REACH FOR EVENT.CURRENTTARGET INSTEAD OF EVENT.TARGET BUT IT IS USEFUL TO KNOW

// & CLICKING ON MULTIPLE ITEMS IS CALLED PROPAGATION
window.addEventListener(
    'click',
    (event) => {
        console.log('window clicked');
        console.log(event.target);
        console.log(event.type);
        console.log(event.bubbles);
        // event.stopPropagation();
    }, { capture: true }
);

const photoEl = document.querySelector('.photo');
photoEl.addEventListener('mouseenter', (event) => {
    console.log(event.currentTarget);
    console.log(this);
});

// ! THIS KEYWORD IS WHAT IT IS TO THE LEFT TO THE DOT

// & DON'T RECOMMEND USING THIS IN CALLBACKS