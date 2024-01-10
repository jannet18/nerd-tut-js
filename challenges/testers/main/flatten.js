// array flattening algorithm
// - Flattening an array refers to the process of converting a nested array in to a single level array.
// [[1], [2]] => [1,2]
// [[1, [2,3], [5]]] => [1,2,3,5]
// ** copy
// base case **
// ***
// circular reference/circular dependancy - occurs when two or more objects refence each other in a way that creates an endless loop
// value not an array
// sparse array - array in which not all elements are defined or initialized

// Array.prototype.flatten = function (visited = new Set()) {
//   // circular reference
//   if (visited.has(this)) {
//     return [];
//   }
//   visited.add(this);
//   const flattenArr = [];
//   //   loop over the array
//   //   for (const value of this)
//   for (let i = 0; i < this.length; i++) {
//     //   check for empty arrays
//     if (this[i].length === 0) {
//       continue;
//     }
//     // is it an array or sparse array
//     if (this.hasOwnProperty(i) && Array.isArray(this[i])) {
//       // not -> put in result
//       const flattened = this[i].flatten();
//       flattenArr.push(...flattened);
//       //   flattenArr.concat(...flattened);creates a new array but does not update the flattenArr
//       //   soln reassign result of concat back to flattenArr
//     } else {
//       // yes -> loop through this array, recurse?
//       //   flattenArr.push(this[i]);
//       //   flattenArr = [...flattenArr, this[i]];
//     }
//   }
//   return flattenArr;
// };

Array.prototype.flattenObject = function (obj) {
  const flattenArr = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        const flattened = flattenObject(value);
        flattenArr.push(...flattened);
      } else if (typeof value === "object" && value !== null) {
        const flattened = flattenObject(value);
        flattenArr.push(...flattened);
      } else {
        flattenArr.push(value);
      }
    }
  }
  return flattenArr;
};
// console.log([[1, 2], 3].flatten());
// console.log([[1, 2], 3, 4].flatten());
// console.log([[1, 2, [3, 4]], 5, 6].flatten());
console.log([1, "hello", [2, { key: "value" }, 3]].flattenObject());
