const dataInput = document.querySelector('.controls input[type="range"]');
const popup = document.querySelector('.popup');
const colorInput = document.querySelector('[name="color"]');
const widthInput = document.querySelector('[name="width"]');

function handleOption() {
  localStorage.setItem('options', dataInput.value);
  popup.classList.add('appear');
}
function handleColor() {
  localStorage.setItem('color', colorInput.value);
}
function handleWidth() {
  localStorage.setItem('width', widthInput.value);
}
colorInput.addEventListener('input', handleColor);
colorInput.value = localStorage.getItem('color');
widthInput.addEventListener('input', handleWidth);
widthInput.value = localStorage.getItem('width');
dataInput.addEventListener('input', handleOption);
dataInput.value = localStorage.getItem('options');
