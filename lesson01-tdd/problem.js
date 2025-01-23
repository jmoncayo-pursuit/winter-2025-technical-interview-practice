/**
 * Problem: Given a string, write a function to determine if it is a palindrome.
 * A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.
 * Ignore spaces, punctuation, and capitalization.
 *
 * Example:
 * isPalindrome("A man, a plan, a canal: Panama") => true
 * isPalindrome("race a car") => false
 *
 * @param {string} str - The input string.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
  // checking if the input is a string
  if (typeof str !== "string") return false;

  // normalize str 
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  // initialize 2 pointer
  let left = 0;
  let right = cleanedStr.length -1;

  //compare characters from both ends
  while (left < right ) {
    if (cleanedStr[left] !== cleanedStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true; // is a palindrome
}

module.exports = isPalindrome;

