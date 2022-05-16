function Slider(slider) {
  if (!slider) {
    throw new Error('No slider was passed');
  }
  // & Create some variables for working with the slider
  let prev;
  let current;
  let next;

  // select the elemnts needed for the slider
  const slides = slider.querySelector('.slides');
  const prevBtn = slider.querySelector('.goToPrev');
  const nextBtn = slider.querySelector('.goToNext');

  function startSlider() {
    current = slider.querySelector('.current') || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
  }

  function applyClasses() {
    current.classList.add('current');
    prev.classList.add('prev');
    next.classList.add('next');
  }

  function move(direction) {
    // fist strip all the classes off the current slides
    const classesToRemove = ['prev', 'current', 'next'];
    current.classList.remove(...classesToRemove);
    prev.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);
    if (direction === 'back') {
      // & make an new array of the new values, and destructure them over and into the prev, current and next variables
      [prev, current, next] = [
        // get the prev slide, if there is none, get the last slide from the entire slider for wrapping
        prev.previousElementSibling || slides.lastElementChild,
        prev,
        current,
      ];
    } else {
      [prev, current, next] = [
        current,
        next,
        // get the next slide, or if it's at the end, loop around and grab the first slide'
        next.nextElementSibling || slides.firstElementChild,
      ];
    }
    applyClasses();
  }
  //! WHEN THIS SLIDER IS CREATED, RUN THE SLIDER FUNCTION
  startSlider();
  applyClasses();

  // ? EVENT LISTENERS
  prevBtn.addEventListener('click', () => move('back'));
  nextBtn.addEventListener('click', () => move(''));
}

const mySlider = new Slider(document.querySelector('.slider'));
const dogSlider = new Slider(document.querySelector('.dog-slider'));

console.log(mySlider, dogSlider);
