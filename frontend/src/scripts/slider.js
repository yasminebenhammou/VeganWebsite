const totalImages = document.getElementById("carousel-container").getElementsByTagName("img").length;
let currentIndex;

const imgSlider = simpleslider.getSlider({
  container: document.getElementById('carousel-container'),
  prop: 'left',
  init: -612,
  show: 0,
  end: 612,
  unit: 'px',
  transitionTime: 0.5,
  delay: 1.5,
  onChange: () => changeSlide(imgSlider.currentIndex())
});

function changeSlide(index) {
  document.querySelectorAll('.dot').forEach((dot, i) => dot.classList.toggle('active', i === index));
}

Array.from({ length: totalImages }).forEach(() => {
  const dotsContainer = document.getElementById('dots-container');
  const newDot = document.createElement('div');
  newDot.classList.add('dot');
  dotsContainer.appendChild(newDot);
});