const myHeaders = new Headers();
myHeaders.append('apikey', 'BIf5hKPnfNxARt99LH95sLB2742yc0Ze');

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};

const endpoint = 'https://api.apilayer.com/exchangerates_data/latest';
const ratesByBase = {};

export async function fetchRates(base = 'USD') {
  const response = await fetch(`${endpoint}?base=${base}`, requestOptions);
  const rates = await response.json();
  return rates;
}

export async function convert(amount, from, to) {
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
