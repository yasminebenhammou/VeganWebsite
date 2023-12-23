const carousel = document.querySelector("#container-items-slider2 .carousel-track");
let index = 0;

function moveCarousel(direction) {
  const carouselItems = document.querySelectorAll("#container-items-slider2 .carousel-item");
  const totalItems = carouselItems.length;

  index = (index + direction + totalItems) % totalItems;

  carouselItems.forEach((item, i) => {
    const position = (i - index + totalItems) % totalItems;
    item.style.transform = `translateX(${position * 100}%)`;
  });
}