function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No gallery element provided');
  }

  // & SELECT THE ELEMENTS WE NEED

  const images = Array.from(gallery.querySelectorAll('img'));
  console.log(images);
  const modal = document.querySelector('.modal');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  let currentImage;

  function openModal() {
    console.info('opening modal...');
    // & first check if the modal is already open
    if (modal.matches('.open')) {
      console.info('modal already open');
      return; // stop function from running
    }
    modal.classList.add('open');

    // ! EVENT LISTENERS TO BE BOUND WHEN WE OPEN THE MODAL:
    window.addEventListener('keyup', handleKeyUp);
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);
  }

  function closeModal() {
    console.info('closing modal...');
    modal.classList.remove('open');
    // TODO: add event listeners for clicks and keyboard...
    window.removeEventListener('keyup', handleKeyUp);
    nextButton.removeEventListener('click', showNextImage);
    prevButton.removeEventListener('click', showPrevImage);
  }

  function handleClickOutside(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  function handleKeyUp(e) {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') showNextImage();
    if (e.key === 'ArrowLeft') showPrevImage();
  }

  function showNextImage(e) {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  }

  function showPrevImage(e) {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }

  function showImage(el) {
    if (!el) {
      console.info('no image element provided');
    }
    // update the modal with this info
    console.log(el);
    modal.querySelector('img').src = el.src;
    modal.querySelector('h2').textContent = el.title;
    modal.querySelector('figure p').textContent = el.dataset.description;
    currentImage = el;
    openModal();
  }

  //! THESE ARE OUR EVENT LISTENERS!

  images.forEach((image) =>
    image.addEventListener('click', (e) => {
      showImage(e.currentTarget);
    })
  );
  images.forEach((image) =>
    image.addEventListener('keyup', (e) => {
      // & when that is key up'd check if it was enter
      if (e.key === 'Enter') showImage(e.currentTarget);
    })
  );

  modal.addEventListener('click', handleClickOutside);
}

// use it on the page

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));

console.log(gallery1, gallery2);
