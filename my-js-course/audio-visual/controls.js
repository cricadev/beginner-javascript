export const dataInput = document.querySelector(
  '.controls input[type="range"]'
);
export const popup = document.querySelector('.popup');
export const colorInput = document.querySelector('[name="color"]');
export const widthInput = document.querySelector('[name="width"]');

export function handleOption() {
  localStorage.setItem('options', dataInput.value);
  popup.classList.add('appear');
}
export function handleColor() {
  localStorage.setItem('color', colorInput.value);
}
export function handleWidth() {
  localStorage.setItem('width', widthInput.value);
}
colorInput.addEventListener('input', handleColor);
colorInput.value = localStorage.getItem('color');
widthInput.addEventListener('input', handleWidth);
widthInput.value = localStorage.getItem('width');
dataInput.addEventListener('input', handleOption);
dataInput.value = localStorage.getItem('options');
