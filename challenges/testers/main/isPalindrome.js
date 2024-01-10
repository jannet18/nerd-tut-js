String.prototype.isPalindrome = function () {
  let reversedArray = this.split("").toLowercase().reverse().join();
  return reversedArray;
};

// console.log("abba".isPalindrome());
