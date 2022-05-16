import 'babel-polyfill';

function wait(ms = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
async function destroyPopup(popup) {
  let myPopup = popup;
  popup.classList.remove('open');
  await wait(1000);
  // remove the popup entirely!
  popup.remove();
  myPopup = null;
}
function ask(options) {
  return new Promise(async (resolve) => {
    // & first we need to create a popup with all the fields in it
    const popup = document.createElement('form');
    popup.classList.add('popup');
    popup.insertAdjacentHTML(
      'afterbegin',
      `<fieldset>
          <label>${options.title}</label>
          <input type="text" name="input"/>
          <button type="submit">Submit</button>
      </fieldset>`
    );

    console.log(popup);
    // & check if they want a cancel button
    if (options.cancel) {
      const skipButton = document.createElement('button');
      skipButton.type = 'button';
      skipButton.textContent = 'Cancel';
      popup.firstElementChild.appendChild(skipButton);

      // TODO: listen for a click on that cancel button
      skipButton.addEventListener(
        'click',
        () => {
          resolve(null);
          destroyPopup(popup);
        },
        { once: true }
      );
    }
    // & insert that popup into the DOM

    // & listen for the submit event on the input
    popup.addEventListener(
      'submit',
      (e) => {
        e.preventDefault();
        resolve(e.target.input.value);
        console.log(e.target);
        destroyPopup(popup);
      },
      { once: true }
    );

    document.body.appendChild(popup);

    await wait(50);
    popup.classList.add('open');
  });
}
async function askQuestion(e) {
  const button = e.currentTarget;
  const shouldCancel = 'cancel' in button.dataset;
  console.log(button.dataset);
  const answer = await ask({
    title: button.dataset.question,
    cancel: true,
  });
  console.log(answer);
}

// select all buttons that have a question
const buttons = document.querySelectorAll('[data-question]');
buttons.forEach((button) => button.addEventListener('click', askQuestion));

const questions = [
  { title: 'What is your name?', cancel: true },
  { title: 'What is your age?', cancel: true },
  { title: 'What is your dogs name?', cancel: true },
];

async function asyncMap(array, callback) {
  // make an array to store our results
  const results = [];
  // loop over the array
  for (const item of array) {
    results.push(await callback(item));
  }
  // when we are done the loop, return it!
  return results;
}

async function go() {
  const answers = await asyncMap(questions, ask);
  console.log(answers);
}

go();
// async function askMany() {
//   for (const question of questions) {
//     const answer = await ask(question);
//     console.log(answer);
//   }
// }

// askMany();
