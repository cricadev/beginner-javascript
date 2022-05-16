function Slider(slider) {
  if (!slider) {
    throw new Error('No slider was passed');
  }
  // & Create some variables for working with the slider

  // select the elemnts needed for the slider
  this.slider = slider;
  this.slides = slider.querySelector('.slides');
  this.prevBtn = slider.querySelector('.goToPrev');
  this.nextBtn = slider.querySelector('.goToNext');

  //! WHEN THIS SLIDER IS CREATED, RUN THE SLIDER FUNCTION
  this.startSlider();
  this.applyClasses();

  // ? EVENT LISTENERS
  this.prevBtn.addEventListener('click', () => this.move('back'));
  this.nextBtn.addEventListener('click', () => this.move(''));
}
Slider.prototype.startSlider = function () {
  this.current =
    this.slider.querySelector('.current') || this.slides.firstElementChild;
  this.prev =
    this.current.previousElementSibling || this.slides.lastElementChild;
  this.next = this.current.nextElementSibling || this.slides.firstElementChild;
};

Slider.prototype.applyClasses = function () {
  this.current.classList.add('current');
  this.prev.classList.add('prev');
  this.next.classList.add('next');
};

Slider.prototype.move = function (direction) {
  // fist strip all the classes off the current slides
  const classesToRemove = ['prev', 'current', 'next'];
  this.current.classList.remove(...classesToRemove);
  this.prev.classList.remove(...classesToRemove);
  this.next.classList.remove(...classesToRemove);
  if (direction === 'back') {
    // & make an new array of the new values, and destructure them over and into the prev, current and next variables
    [this.prev, this.current, this.next] = [
      // get the prev slide, if there is none, get the last slide from the entire slider for wrapping
      this.prev.previousElementSibling || this.slides.lastElementChild,
      this.prev,
      this.current,
    ];
  } else {
    [this.prev, this.current, this.next] = [
      this.current,
      this.next,
      // get the next slide, or if it's at the end, loop around and grab the first slide'
      this.next.nextElementSibling || this.slides.firstElementChild,
    ];
  }
  this.applyClasses();
};

const mySlider = new Slider(document.querySelector('.slider'));
const dogSlider = new Slider(document.querySelector('.dog-slider'));

console.log(mySlider, dogSlider);

window.dogSlider = dogSlider;

window.addEventListener('keyup', (e) => {
  if (e.key === 'ArrowRight') {
    dogSlider.move('');
  }
  if (e.key === 'ArrowLeft') {
    dogSlider.move('back');
  }
});
