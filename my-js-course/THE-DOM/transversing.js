// & TRAVERSING MEANS GOING UP DOWN OVER MAYBE YOU NEED TO LOOK INSIDE OF AN ELEMENT, THERE ARE A LOT OF PROPERTIES TO DO THAT

const cris = document.querySelector('.cris');

//* IGNORE NODES only catch elements

console.log(cris.children);
console.log(cris.childNodes);

console.log(cris.firstElementChild);
console.log(cris.lastElementChild);
console.log(cris.previousElementSibling);
console.log(cris.nextElementSibling);
console.log(cris.parentElement);
//! $0.parentElement.parentElement.nextElementSibling.children[0] USEFUL IN THE DEVTOOLS

//* COUNT NODES

console.log(cris.childNodes);
console.log(cris.firstChild);
console.log(cris.lastChild);
console.log(cris.previousSibling);
console.log(cris.nextSibling);
console.log(cris.parentNode);

// & HOW TO REMOVE ELEMENTS?

const create = document.createElement('p');
create.textContent = 'Sapo hijueputa';
document.body.appendChild(create);