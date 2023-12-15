(function () {
  "use strict";

  const myImages = ["banner.png", "shirt.jpeg", "one.jpg"];
  let currentImage = 0;

  // document.getElementById("next").onclick = nextPhoto;
  // document.getElementById('previous') = previousPhoto;
  document.getElementById("next");
  document.getElementById("next");

  // function nextPhoto() {

  //     currentImage++;
  //     if (currentImage > myImages.length -1){
  //         currentImage = 0
  //     }
  //     document.getElementById("myImage").src = myImages.currentImage;
  // }

  function previousPhoto() {
    currentImage--;
    if (currentImage < 0) {
      // currentImage = 1 + myImages.length
      // currentImage = myImages.currentImage[2]
      currentImage = myImages.length - 1;
    }
    document.getElementById("myImage").src = myImages[currentImage];
  }
});
