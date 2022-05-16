/*
const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a p';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500';
myImage.alt = 'Nice pic';

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');

console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

// & OH SHOOT WE  NEED TO ADD SOMETHING TO THE top. LIKE A HEADING
const heading = document.createElement('h2');
heading.textContent = 'cool things';

myDiv.insertAdjacentElement('afterbegin', heading);
*/
// &create a list of items with all the apis that we learned
// !<ul>
// !<li>one</li>
// !<li>two</li>
// !<li>three</li>
// !<li>four</li>
// !<li>five</li>
//! </ul>

const myWrapper = document.createElement('div');
myWrapper.classList.add('wrapper');

const myUl = document.createElement('ul');
myUl.classList.add('ul');
myUl.textContent = 'Fruits';

const myLi1 = document.createElement('li');
const myLi2 = document.createElement('li');
const myLi3 = document.createElement('li');
const myLi4 = document.createElement('li');
const myLi5 = document.createElement('li');

myLi1.classList.add('li');
myLi1.textContent = 'Banana';
myLi2.classList.add('li');
myLi2.textContent = 'Watermelon';
myLi3.classList.add('li');
myLi3.textContent = 'Apple';
myLi4.classList.add('li');
myLi4.textContent = 'Pineapple';
myLi5.classList.add('li');
myLi5.textContent = 'Coconut';

const myImg1 = document.createElement('img');
myImg1.classList.add('img');
myImg1.src =
    'https://images.pexels.com/photos/5945848/pexels-photo-5945848.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260';

const myImg2 = document.createElement('img');
myImg2.classList.add('img');
myImg2.src =
    'https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';

const myImg3 = document.createElement('img');
myImg3.classList.add('img');
myImg3.src =
    'https://images.pexels.com/photos/3652898/pexels-photo-3652898.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';

const myImg4 = document.createElement('img');
myImg4.classList.add('img');
myImg4.src =
    'https://images.pexels.com/photos/947879/pexels-photo-947879.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';

const myImg5 = document.createElement('img');
myImg5.classList.add('img');
myImg5.src =
    'https://images.pexels.com/photos/6157093/pexels-photo-6157093.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
myWrapper.appendChild(myUl);
myUl.appendChild(myLi1);
myUl.appendChild(myLi2);
myUl.appendChild(myLi3);
myUl.appendChild(myLi4);
myUl.appendChild(myLi5);
myLi1.appendChild(myImg1);
myLi2.appendChild(myImg2);
myLi3.appendChild(myImg3);
myLi4.appendChild(myImg4);
myLi5.appendChild(myImg5);

document.body.appendChild(myWrapper);
console.log(myWrapper);