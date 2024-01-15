String.prototype.isPalindrome = function () {
  const cleanedString = this.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedArray = cleanedString.split("").reverse().join("");
  if (cleanedString === reversedArray) return true;
  return false;
};

console.log("abba".isPalindrome());
console.log("racecar".isPalindrome());
console.log("abdccba".isPalindrome());
