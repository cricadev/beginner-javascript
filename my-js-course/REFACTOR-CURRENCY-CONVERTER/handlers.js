import { convert } from './lib.js';
import { formatCurrency } from './utils.js';
import { fromInput, fromSelect, toSelect, fromEl, toEl } from './elements.js';

export async function handleInput(e) {
  const rawAmount = await convert(
    fromInput.value,
    fromSelect.value,
    toSelect.value
  );
  console.log(rawAmount);
  fromEl.textContent = formatCurrency(fromInput.value, fromSelect.value);
  toEl.textContent = formatCurrency(rawAmount, toSelect.value);
}
