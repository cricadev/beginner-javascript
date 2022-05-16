import 'babel-polyfill';

const wait = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));

wait(2000).then(() => {
  console.log('done');
});

const go = document.querySelector('.go');

function animate(e) {
  const el = e.currentTarget;
  // 1. change the text to GO when clicked.
  el.textContent = 'GO!';
  // 2. Make it a circle after 2 seconds.
  wait(2000)
    .then(() => {
      el.classList.add('circle');
      return wait(500);
    })
    .then(() => {
      el.classList.add('red');
      return wait(250);
    })
    .then(() => {
      el.classList.remove('circle');
      return wait(300);
    })
    .then(() => {
      el.classList.remove('red');
      el.classList.add('purple');
      return wait(1000);
    })
    .then(() => {
      el.classList.add('fade');
    });
}
async function animate2(e) {
  const el = e.currentTarget;
  // 1. change the text to GO when clicked.
  el.textContent = 'GO!';
  // 2. Make it a circle after 2 seconds.
  await wait(2000);
  el.classList.add('circle');
  await wait(500);
  // 3. Make it red after 0.5 seconds.
  el.classList.add('red');
  await wait(250);
  // 4. Make it a square after 0.25 seconds.
  el.classList.remove('circle');
  await wait(300);
  // 5. Make it purple after 0.3 seconds.
  el.classList.remove('red');
  el.classList.add('purple');
  await wait(1000);
  // 6. Make it fade out after 1 second.
  el.classList.add('fade');
}

go.addEventListener('click', animate2);

go.addEventListener('clickss', animate);

go.addEventListener('clickzzz', (e) => {
  const el = e.currentTarget;
  el.textContent = 'GO!';
  // 2. Make it a circle after 2 seconds.
  setTimeout(() => {
    el.classList.add('circle');
    // 3. Make it red after 0.5 seconds.
    setTimeout(() => {
      el.classList.add('red');
      // 4. Make it a square after 0.25 seconds.
      setTimeout(() => {
        el.classList.remove('circle');
        // 5. Make it purple after 0.3 seconds.
        setTimeout(() => {
          el.classList.remove('red');
          el.classList.add('purple');
          // 6. Make it fade out after 1 second.
          setTimeout(() => {
            el.classList.add('fade');
          }, 500);
        }, 300);
      }, 250);
    }, 500);
  }, 2000);
});
// 1. change the text to GO when clicked.
