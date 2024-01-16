(function () {
  "use strict";
  const myPhotos = ["banner.png", "shirt.jpeg", "brown.jpeg"];
  let currentImage = 0;

  const container = document.getElementById("content");
  const nextPhoto = document.getElementById("next");
  const prevPhoto = document.getElementById("previous");

  function swapImage() {
    // create a new image element
    const newSlide = document.createElement("img");
    // set source attributes
    newSlide.src = `slides/${myPhotos[currentImage]}`;
    // set the class name
    newSlide.className = "fadeinimg";
    // append it to the container
    container.appendChild(newSlide);
    if (container.children.length > 2) {
      container.removeChild(container.children[0]);
    }
  }
  nextPhoto.addEventListener("click", function (e) {
    e.preventDefault();
    currentImage++;
    if (currentImage > myPhotos.length - 1) {
      currentImage = 0;
    }
    swapImage();
  });

  prevPhoto.addEventListener("click", function (e) {
    e.preventDefault();
    currentImage--;
    if (currentImage < 0) {
      currentImage = myPhotos.length - 1;
    }
    swapImage();
  });
})();
