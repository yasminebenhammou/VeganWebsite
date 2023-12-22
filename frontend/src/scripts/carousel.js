const carousel = document.getElementsByClassName("carousel-container")[0];
  const track = document.getElementsByClassName("track")[0];

  let slideWidth = carousel.offsetWidth;
  let currentIndex = 0;

  window.addEventListener("resize", () => slideWidth = carousel.offsetWidth);

  const updateButtonVisibility = () => {
    const prevButton = document.getElementsByClassName("prev")[0];
    const nextButton = document.getElementsByClassName("next")[0];

    prevButton.classList.toggle("show", currentIndex > 0);
    nextButton.classList.toggle("hide", track.offsetWidth - currentIndex * slideWidth <= currentIndex * slideWidth);
  };

  const moveTrack = () => track.style.transform = `translateX(${-currentIndex * slideWidth}px)`;

  document.getElementsByClassName("next")[0].onclick = (e) => { e.preventDefault(); currentIndex++; moveTrack(); updateButtonVisibility(); };
  document.getElementsByClassName("prev")[0].onclick = () => { currentIndex--; moveTrack(); updateButtonVisibility(); };
