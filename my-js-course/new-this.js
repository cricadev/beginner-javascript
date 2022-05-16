const myDate = new Date('August 11, 2025');
console.dir(myDate);
console.log(myDate.getFullYear());
const span = document.createElement('span');

console.log(span);

String.prototype.sarcastic = function () {
  console.log(this);
  // make sarcastic
  const sarcastic = this.split('')
    .map((char, i) => {
      if (i % 2 === 0) {
        return char.toUpperCase();
      }
      return char.toLowerCase();
    })
    .join(' ');
  return sarcastic;
};

function Pizza(toppings = [], customer) {
  console.log('MAKING A PIZZA');
  // & save the toppings that were passed in, to this instance of pizza
  this.toppings = toppings;
  this.customer = customer;
  this.id = Math.floor(Math.random() * 16777215).toString(16);
  this.slices = 10;
}
Pizza.prototype.eat = function () {
  if (this.slices > 0) {
    this.slices -= 1;
    console.log(`CHOMP you now have ${this.slices} left!`);
  } else {
    console.log('You are out of pizza!');
  }
};
// TODO: This pizza is for this customer name and the toppings are and the slices left are slices

Pizza.prototype.describe = function () {
  console.log(
    `This pizza is for ${this.customer} and has ${
      this.toppings.length
    } toppings which are ${this.toppings.join(', ')} and has ${
      this.slices
    } slices left`
  );
};

const pepperoniPizza = new Pizza(['Tomatoes', 'Lettuce'], 'Tef');
const canadianPizza = new Pizza(['Tomatoes, Lettuce', 'Mushrooms'], 'Cricadev');
console.log(pepperoniPizza.describe());
console.log(pepperoniPizza);
console.log(canadianPizza);
console.log(pepperoniPizza.constructor);
console.log(pepperoniPizza instanceof Pizza);

const button1 = document.querySelector('.one');
const button2 = document.querySelector('.two');

const tellMeAboutTheButton = () => {
  console.log(this);
};

function tellMeAboutTheButton2() {
  console.log('outside', this);
  setTimeout(() => {
    console.log('inside', this);
    this.textContent = 'You Clicked Me';
  }, 1000);
}
// button1.addEventListener('click', tellMeAboutTheButton);
// button2.addEventListener('click', tellMeAboutTheButton);
button1.addEventListener('click', tellMeAboutTheButton2);
button2.addEventListener('click', tellMeAboutTheButton2);
