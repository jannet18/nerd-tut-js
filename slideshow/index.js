(function () {
  "use strict";
  const myPhotos = ["banner.png", "shirt.jpeg", "one.jpg"];
  let currentImage = 0;

  const container = document.getElementById("content");
  const nextPhoto = document.getElementById("next");
  const prevPhoto = document.getElementById("prev");

  nextPhoto.addEventListener("click", function (e) {
    e.preventDefault();
    currentImage++;
    if (currentImage > myPhotos.length - 1) {
      currentImage = 0;
    }
    // create a new image element
    let newSlide = document.createElement("img");
    // set source attributes
    newSlide.src = `slides ${myPhotos[currentImage]}`;
    // set the class name
    newSlide.className = "fadeinimg";
    // append it to the container
    container.appendChild(newSlide);
  });
});
