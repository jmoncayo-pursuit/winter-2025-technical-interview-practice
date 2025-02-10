/*
Problem Prompt:
Write a function that takes in two strings and returns true if they are valid anagrams of each other, and false otherwise. An anagram is a word or phrase formed by rearranging the letters of another word or phrase.

Function Signature:
function areAnagrams(str1, str2) {
    // Your code here
}

Test Cases:
console.log(areAnagrams("listen", "silent")); // Expected output: true
console.log(areAnagrams("hello", "world")); // Expected output: false
console.log(areAnagrams("rail safety", "fairy tales")); // Expected output: true
console.log(areAnagrams("restful", "fluster")); // Expected output: true
console.log(areAnagrams("programming", "coding")); // Expected output: false
*/

function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;
    let count = Array(26).fill(0);
    for (let i = 0; i < str1.length; i++) {
      count[str1.charCodeAt(i) - 97]++;
      count[str2.charCodeAt(i) - 97]--;
    }
    return count.every(c => c === 0);
}

module.exports = areAnagrams;

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false
console.log(areAnagrams("rail safety", "fairy tales")); // true
console.log(areAnagrams("restful", "fluster")); // true
console.log(areAnagrams("programming", "coding")); // false
