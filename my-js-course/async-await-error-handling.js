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
      reject(new Error(`seriously? get out`));
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
function handleError(err) {
  console.error('OH NOOOO');
  console.error(err);
}
async function go() {
  const pizza = await makePizza(['pineapple']);
  // .catch(handleError);
  console.log(pizza);
  return pizza;
}

// go()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch(handleError);

//! catch it at run time

go().catch(handleError);

//! make a safe function with a High Order Function

function makeSafe(fn, errorHandler) {
  return function () {
    fn().catch(errorHandler);
  };
}

const safeGo = makeSafe(go, handleError);

safeGo();
