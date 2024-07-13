function isPalindrome(word) {
  // Reverse the string
  const reversedStr = word.split('').reverse().join('');
  
  // Compare the reversed string with the original string
  return reversedStr === word;
}

/* 
  Pseudocode:
  1. Define a function named isPalindrome that takes a single argument, word.
  2. Reverse the string word:
     a. Split the string into an array of characters.
     b. Reverse the array of characters.
     c. Join the reversed array of characters back into a string.
  3. Compare the reversed string to the original string.
  4. If the reversed string is the same as the original string, return true.
  5. If the reversed string is not the same as the original string, return false.
*/

/*
  Explanation:
  The isPalindrome function checks if a given string (word) reads the same forwards and backwards.
  It achieves this by reversing the string and then comparing the reversed string to the original string.
  If both strings are identical, it means the word is a palindrome, and the function returns true.
  Otherwise, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello"));
}

module.exports = isPalindrome;
