// calculate the area of a circle
const radius = [1, 2, 3, 4];
const users = [
  { firstname: "John", lastname: "Doe", age: 25 },
  { firstname: "Jake", lastname: "Doe", age: 25 },
  { firstname: "Leah", lastname: "Doe", age: 25 },
  { firstname: "Jack", lastname: "Doe", age: 25 },
];

const areaOfCircle = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};

// calculate the diameter of a circle
const diameter = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(radius[i] * 2);
  }
  return output;
};

// ** HIGHER ORDER **
const area = function (radius) {
  return Math.PI * radius * radius;
};

const diameter2 = function (radius) {
  return 2 * radius;
};
// c = 2(pi)r
const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

// console.log(areaOfCircle(radius));
// console.log(diameter(radius));
// console.log(calculate(radius, area));
// console.log(calculate(radius, diameter2));
// console.log(calculate(radius, circumference));
// .map()
// impilicit return
const output = radius.map((item) => (item += 10));
// explicit return
const result = users.map((user) => {
  return user.firstname + " " + user.lastname;
});
console.log(radius);
console.log(result);
