function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No gallery element provided');
  }

  // & SELECT THE ELEMENTS WE NEED

  this.images = Array.from(gallery.querySelectorAll('img'));
  this.modal = document.querySelector('.modal');
  this.prevButton = document.querySelector('.prev');
  this.nextButton = document.querySelector('.next');

  // bind our methods to the instance when we need them
  this.showNextImage = this.showNextImage.bind(this);
  this.showPrevImage = this.showPrevImage.bind(this);
  this.handleKeyUp = this.handleKeyUp.bind(this);
  this.handleClickOutside = this.handleClickOutside.bind(this);

  //! THESE ARE OUR EVENT LISTENERS!

  this.images.forEach((image) =>
    image.addEventListener('click', (e) => {
      this.showImage(e.currentTarget);
    })
  );
  this.images.forEach((image) =>
    image.addEventListener('keyup', (e) => {
      // & when that is key up'd check if it was enter
      if (e.key === 'Enter') this.showImage(e.currentTarget);
    })
  );

  this.modal.addEventListener('click', this.handleClickOutside);
}
Gallery.prototype.openModal = function () {
  console.info('opening modal...');
  // & first check if the modal is already open
  if (this.modal.matches('.open')) {
    console.info('modal already open');
    return; // stop function from running
  }
  this.modal.classList.add('open');

  // ! EVENT LISTENERS TO BE BOUND WHEN WE OPEN THE MODAL:
  window.addEventListener('keyup', this.handleKeyUp);
  this.nextButton.addEventListener('click', this.showNextImage);
  this.prevButton.addEventListener('click', this.showPrevImage);
};

Gallery.prototype.closeModal = function () {
  console.info('closing modal...');
  this.modal.classList.remove('open');
  // TODO: add event listeners for clicks and keyboard...
  window.removeEventListener('keyup', this.handleKeyUp);
  this.nextButton.removeEventListener('click', this.showNextImage);
  this.prevButton.removeEventListener('click', this.showPrevImage);
};
Gallery.prototype.handleClickOutside = function (e) {
  if (e.target === e.currentTarget) {
    this.closeModal();
  }
};

Gallery.prototype.handleKeyUp = function (e) {
  if (e.key === 'Escape') this.closeModal();
  if (e.key === 'ArrowRight') this.showNextImage();
  if (e.key === 'ArrowLeft') this.showPrevImage();
};

Gallery.prototype.showNextImage = function (e) {
  console.log(this);
  this.showImage(
    this.currentImage.nextElementSibling || this.gallery.firstElementChild
  );
};

Gallery.prototype.showPrevImage = function (e) {
  this.showImage(
    this.currentImage.previousElementSibling || this.gallery.lastElementChild
  );
};

Gallery.prototype.showImage = function (el) {
  if (!el) {
    console.info('no image element provided');
  }
  // update the modal with this info
  console.log(el);
  this.modal.querySelector('img').src = el.src;
  this.modal.querySelector('h2').textContent = el.title;
  this.modal.querySelector('figure p').textContent = el.dataset.description;
  this.currentImage = el;
  this.openModal();
};
// use it on the page

const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));

console.log(gallery1, gallery2);
