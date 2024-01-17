// select elements
// identify key presses- show wht is expected with each key press
// add events to element in response to the conversion type
(function () {
  "use strict";
  let conversionType = "miles";
  const heading = document.querySelector("h2");
  const intro = document.querySelector("p");
  const answerDiv = document.getElementById("invisible");
  const form = document.getElementById("convert");

  document.addEventListener("keydown", function (e) {
    const key = e.code;
    if (key === "KeyK") {
      // change the value of the conversion type
      conversionType = "kilometers";
      // change the heading
      heading.innerHTML = "Kilometers to Miles Converter";
      // change the intro paragraph
      intro.innerHTML =
        "Type in a number of Kilometers and click button to convert the distance to Miles";
    } else if (key === "KeyM") {
      conversionType = "miles";
      heading.innerHTML = "Miles to Kilometers Converter";
      intro.innerText =
        "Type in a number of miles and click button to convert the distance to kilometers";
    }
    //   alert(key);
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const distance = parseFloat(document.getElementById("distance").value);
    if (distance) {
      // convert M to K 1.609344
      if (conversionType === "miles") {
        const conversion = (distance * 1.609344).toFixed(3);
        answerDiv.innerHTML = `${distance} Miles is equivalent to ${conversion} Kilometers`;
      } else {
        // convert K to Mile 0.621371192
        const conversion = (distance * 0.621371192).toFixed(3);
        answerDiv.innerHTML = `${distance} Kilometers is equivalent to ${conversion} Miles`;
      }
    } else {
      answerDiv.innerHTML = "<h2>Please input a number!</h2>";
    }
  });
})();
