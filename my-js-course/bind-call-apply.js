const person = {
  name: 'Wes Bos',
  sayHi() {
    console.log(this);
    console.log(`Hi I'm ${this.name}`);
    return `Hey ${this.name}`;
  },
};

const sayHi = person.sayHi.bind(person);
const jenna = { name: 'Jenna' };
const sayHi2 = person.sayHi.bind({ name: 'cricadev' });

// QS example
//  by calling bind against querySelector, we say when the $ function is run, use `document` as the `this` value.

const $ = document.querySelector.bind(document);
const lookFor = document.querySelectorAll.bind(document);

const wrapper = document.querySelector('.wrapper');
const p = wrapper.querySelector('p');
console.log(p);
console.log($('p'));
console.log(lookFor('p'));

const bill = {
  total: 1000,
  calculate(taxRate) {
    return this.total + this.total * taxRate;
  },
  describe(mealType, drinkTupe, taxRate) {
    return `Your total is $${this.calculate(
      taxRate
    )} for a ${mealType} and a ${drinkTupe}`;
  },
};
const total = bill.calculate(0.13);
const calc = bill.calculate.bind({ total: 500 }, 0.06);
console.log(calc());
const total2 = bill.calculate.call({ total: 500 }, 0.06);
console.log(total2);
const total3 = bill.calculate.apply({ total: 500 }, [0.06]);
console.log(total3);

const myMeal = bill.describe.call(bill, 'lunch', 'water', 0.13);
console.log(myMeal);
const myMeal2 = bill.describe.apply(bill, ['lunch', 'water', 0.13]);
console.log(myMeal2);
