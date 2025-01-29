/*
Problem:

You are given a text string and a pattern string. Your task is to implement a string matching algorithm that finds all occurrences of the pattern in the text.

Write a function `stringMatching(text, pattern)` that takes in two strings as arguments and returns an array of indices where the pattern is found in the text. If the pattern is not found, return an empty array.

Example:

Input:
text = "ababcababcabc"
pattern = "abc"

Output:
[2, 7, 10]

Input:
text = "hello world"
pattern = "xyz"

Output:
[]

Note:
- The matching should be case-sensitive.
- The indices should be 0-based.

*/

function stringMatching(text, pattern) {
  // check if empty string
  if (text === "" || pattern === "") {
    return []; // return empty array if blank
  }
  // initialize empty array to store indices
  const indices = [];
  // get the length of the text and patter strings
  const textLength = text.length;
  const patternLength = pattern.length;

  // loop through text string
  for (let i = 0; i <= textLength - patternLength; i++) {
    // extract substring that matches pattern
    if (text.substring(i, i + patternLength) === pattern) {
      //push if match for indices
      indices.push(i);
    }
  }
  return indices;

}
console.log(stringMatching("ababcababcabc", "abc")); // [2, 7, 10])
console.log(stringMatching("hello world", "xyz")); // [])

module.exports = stringMatching;
