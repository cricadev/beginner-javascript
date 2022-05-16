const edit = document.querySelector('.edit');

const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `Cute pup <img onload="alert("hacked")"src="${src}">`;
const myHTML = `    <div class="wrapper">
                    <h1>Hey how are we</h1>
                     <h2>${desc}</h2>
                     <img src="${src}" alt="${desc}"> 
                     </div>`;

// edit.innerHTML = myHTML;

// &MYHTML IS NOT AN ELEMENT IS ONLY A STRING IT ONLY BECOMES AN ELEMENT WHEN WE DUMP IT INTO THE DUMP
// console.log(edit.innerHTML);

// const editImage = document.querySelector('.wrap img');

// editImage.addEventListener('click', () => editImage.classList.toggle('round'));

// & TURN A STRING INTO A DOM ELEMENT

const myFragment = document.createRange().createContextualFragment(myHTML);

console.log(myFragment);
console.log(myFragment.querySelector('img'));

document.body.appendChild(myFragment);

// !XSS cross - site scripting any time you allow a third party to run javascript in your page that's a big security hole, the only javascript that should be running it is the allowed by you, your code, and maybe google analytics and other services