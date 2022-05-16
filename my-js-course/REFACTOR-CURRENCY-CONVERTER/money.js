import { init } from './init.js';

// start the app!
const app = document.querySelector('.app');
app.addEventListener('mouseenter', init, { once: true });

// fetch(
//   `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
//   requestOptions
// )
//   .then((response) => response.json())
//   .then((result) => console.log(result))
//   .catch((error) => console.log('error', error));
