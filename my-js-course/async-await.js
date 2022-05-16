import 'babel-polyfill';

function wait(ms = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function makePizza(toppings = []) {
  // const pizzaPromise = new Promise((resolve, reject) => {
  return new Promise((resolve, reject) => {
    // reject if people try with pineapple
    if (toppings.includes('pineapple')) {
      reject(new Error(`No pineapple! :pineapple:`));
    }
    const amountOfTimeToBake = 500 + toppings.length * 200;
    // wait 1 second for the pizza to cook:
    setTimeout(() => {
      resolve(`Your pizza is ready with the toppings: ${toppings.join(' ')}`);
    }, amountOfTimeToBake);
    // when you are ready, you can resolve this promise
    // if something went wrong , we can reject this promise;
  });
}

async function go() {
  console.log('starting');
  await wait(2000);
  console.log('running');
  await wait(200);
  console.log('ending');
}
go();

async function makeDinner() {
  const pizza1 = makePizza(['pepperoni']);
  const pizza2 = makePizza(['mushrroms']);
  const [pep, mush] = await Promise.all([pizza1, pizza2]);
  console.log(pep, mush);
}
makeDinner();

// ! declared functions
async function fd() {}

// arrow functions
const arrowFn = async () => {};

// call back
window.addEventListener('click', async () => {});

// methods
const person = {
  // method
  async sayHi() {},
  // method shorthand
  async sayHello() {},
  // function property
  sayHey: async () => {},
};
