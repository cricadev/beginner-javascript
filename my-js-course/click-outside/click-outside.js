const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

function handleButtonClick(e) {
    const button = e.currentTarget;
    const card = button.closest('.card');
    // grab img src from card
    const imgSrc = card.querySelector('img').src;
    const desc = card.dataset.description;
    const name = card.querySelector('h2').textContent;
    // populate the modal with the new info
    modalInner.innerHTML = `<img width="600" height="600"src="${imgSrc.replace(
    '200',
    '600'
  )}" alt ="${name}" />
    <p>${desc}</p>
  `;
    modalOuter.classList.add('open');
}
cardButtons.forEach((button) =>
    button.addEventListener('click', handleButtonClick)
);

function closeModal() {
    modalOuter.classList.remove('open');
}
modalOuter.addEventListener('click', (e) => {
    const isOutside = !e.target.closest('.modal-inner');
    console.log(isOutside);
    if (isOutside) {
        closeModal();
    }
});
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});