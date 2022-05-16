const p = document.querySelector('p');
const div = document.querySelectorAll('.item img');
const item2 = document.querySelector('.item2');
const item2Image = item2.querySelector('img');
const heading = document.querySelector('h2');
// console.log(p, div, item2, item2Image);

// &DOCUMENT QUERY SELECTOR IS GOING TO LOOK FOR WHAT YOU'RE LOOKING FOR ON THE WHOLE PAGE, WHILE IF YOU SELECT A VARIABLE THAT ALREADY SAVED AN ELEMENT YOU COULD QUERY SELECTOR THE VARIABLE AND IT WILL ONLY LOOK FOR INSIDE OF THE VALUE YOU JUST PASSED TO THE VARIABLE

// console.log(heading.textContent);
// console.log(heading.innerText);

//! set the text content property on that element
// heading.textContent = 'Cricadev is god';
console.log(heading.textContent);
console.log(heading.innerText);
console.log(heading.innerHTML);
console.log(heading.outerHTML);

const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent);

// pizzaList.textContent = `${pizzaList.textContent} 🍕`;

pizzaList.insertAdjacentText('afterbegin', '🍕');
pizzaList.insertAdjacentText('beforeend', '🍕');

// nodes are everything and an element is if you have something wrapped

// & CLASSES
const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.toggle('round');
console.log(pic.classList);
pic.classList.contains('round');

function toggleRound() {
    pic.classList.toggle('round');
}
pic.addEventListener('click', toggleRound);

pic.alt = "it's a beautiful image"; // setter
console.log(pic.alt); // getter
console.log(pic.naturalWidth); // getter

pic.addEventListener('load', () => {
    console.log(pic.naturalWidth);
});
pic.setAttribute('alt', 'aaaaaaaaaaaaaaaaaa god'); // setter
console.log(pic.getAttribute('alt')); // getter

//! diff between .alt and set attrtibute if you for some reason wanna set an attrubute that is not an standard you could set it you shouldn't be creating new attributes, if you do want to use your own attrtiburtes  you use data attributes are things like data - (anything)

const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click', () =>
    alert(`Welcome ${custom.dataset.name} ${custom.dataset.last}`)
);