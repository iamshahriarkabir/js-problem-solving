function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

// Examples
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
