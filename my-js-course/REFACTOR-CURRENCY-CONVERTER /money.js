const currencies = {
  USD: 'United States Dollar',
  AUD: 'Australian Dollar',
  BGN: 'Bulgarian Lev',
  BRL: 'Brazilian Real',
  CAD: 'Canadian Dollar',
  CHF: 'Swiss Franc',
  COP: 'Colombian peso',
  CNY: 'Chinese Yuan',
  CZK: 'Czech Republic Koruna',
  DKK: 'Danish Krone',
  GBP: 'British Pound Sterling',
  HKD: 'Hong Kong Dollar',
  HRK: 'Croatian Kuna',
  HUF: 'Hungarian Forint',
  IDR: 'Indonesian Rupiah',
  ILS: 'Israeli New Sheqel',
  INR: 'Indian Rupee',
  JPY: 'Japanese Yen',
  KRW: 'South Korean Won',
  MXN: 'Mexican Peso',
  MYR: 'Malaysian Ringgit',
  NOK: 'Norwegian Krone',
  NZD: 'New Zealand Dollar',
  PHP: 'Philippine Peso',
  PLN: 'Polish Zloty',
  RON: 'Romanian Leu',
  RUB: 'Russian Ruble',
  SEK: 'Swedish Krona',
  SGD: 'Singapore Dollar',
  THB: 'Thai Baht',
  TRY: 'Turkish Lira',
  ZAR: 'South African Rand',
  EUR: 'Euro',
};

const myHeaders = new Headers();
myHeaders.append('apikey', 'BIf5hKPnfNxARt99LH95sLB2742yc0Ze');

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};
const form = document.querySelector('.app form');
const fromInput = document.querySelector(`[name="from_amount"]`);
const fromSelect = document.querySelector("[name='from_currency']");
const toSelect = document.querySelector("[name='to_currency']");
const fromEl = document.querySelector('.displayInput');
const toEl = document.querySelector('.to_amount');
const endpoint = 'https://api.apilayer.com/exchangerates_data/latest';
const ratesByBase = {};

async function fetchRates(base = 'USD') {
  const response = await fetch(`${endpoint}?base=${base}`, requestOptions);
  const rates = await response.json();
  return rates;
}

async function convert(amount, from, to) {
  // first check itf we even have the rates to convert from that currency
  if (!ratesByBase[from]) {
    console.log(
      `oh no, we don't have ${from} rates to convert to ${to}. so let's go get it`
    );
    const rates = await fetchRates(from);
    console.log(rates);
    // store them for next time
    ratesByBase[from] = rates;
  }
  // convert that amount that they passed it
  const rate = ratesByBase[from].rates[to];
  const convertedAmount = rate * amount;
  console.log(`${amount} ${from} is ${convertedAmount} in ${to}`);
  return convertedAmount;
}

function formatCurrency(amount, currency) {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

async function handleInput(e) {
  const rawAmount = await convert(
    fromInput.value,
    fromSelect.value,
    toSelect.value
  );
  console.log(rawAmount);
  fromEl.textContent = formatCurrency(fromInput.value, fromSelect.value);
  toEl.textContent = formatCurrency(rawAmount, toSelect.value);
}

function generateOptions(options) {
  return Object.entries(options)
    .map(
      ([currencyCode, currencyName]) =>
        `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`
    )
    .join('');
}

const optionsHTML = generateOptions(currencies);

fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;

form.addEventListener('input', handleInput);
// fetch(
//   `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
//   requestOptions
// )
//   .then((response) => response.json())
//   .then((result) => console.log(result))
//   .catch((error) => console.log('error', error));
