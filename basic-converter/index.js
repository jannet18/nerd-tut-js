const formSubmit = document.getElementById("convert");
// get elements
// get input, prevent normal form al submissiom
// convert to 3 decimals
// confirm if in put is a number
// if not diplay error
formSubmit.addEventListener("submit", function (e) {
  e.preventDefault();
  // parseFloat- function used to parse a string and convert it to a floating-point Number.
  let inputNum = parseFloat(document.getElementById("distance").value);
  let answer = document.getElementById("invisible");

  //   alert(conversion);
  if (inputNum) {
    // toFixed - used to format a number and represent it as a string with a specified number of digits after the decimal Point
    let conversion = (inputNum * 1.609344).toFixed(3);

    // conversion = ((Math.round(conversion) * 1000) / 1000).toFixed(3);
    answer.innerHTML = `<h2>${inputNum} miles is equivalent to ${conversion} kilometers</h2>`;
  } else {
    answer.innerHTML = "<h2>Please input a number!</h2>";
  }
});
