Array.prototype.myMap = function (cb) {
  let returnArray = [];
  for (let i = 0; i < this.length; i++) {
    returnArray.push(cb(this[i]));
  }
  return returnArray;
};
// const arr1 = [1, 2, 3].myMap(console.log);
// const arr2 = ["a", "b", "c"].myMap(console.log);
// console.log(arr1);
// console.log(arr2);
