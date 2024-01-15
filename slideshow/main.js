(function () {
  "use strict";

  const myImages = ["banner.png", "shirt.jpeg", "brown.jpeg"];
  let currentImage = 0;

  document.getElementById("next").onclick = nextPhoto;
  document.getElementById("previous").onclick = previousPhoto;
  // document.getElementById("next");
  // document.getElementById("previous");

  function nextPhoto() {
    currentImage++;
    if (currentImage > myImages.length - 1) {
      currentImage = 0;
    }
    document.getElementById("myImage").src = myImages[currentImage];
  }

  function previousPhoto() {
    currentImage--;
    if (currentImage < 0) {
      currentImage = myImages.length - 1;
    }
    document.getElementById("myImage").src = myImages[currentImage];
  }
})();
