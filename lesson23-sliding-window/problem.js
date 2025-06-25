// Given a string s and an integer k, write a function that finds the length of the longest substring that contains at most k distinct characters.
// Input: s = "eceba", k = 2
// Output: 3
// Explanation: The substring "ece" has length 3 and contains 2 distinct characters.

// Input: s = "aa", k = 1
// Output: 2
// Explanation: The string "aa" has length 2 and contains 1 distinct character.

// Input: s = "abcdef", k = 3
// Output: 3
// Explanation: Any substring of length 3 contains exactly 3 distinct characters.

// pseudocode
// 1. initialize a left pointer at 0
// 2. initialize a right pointer at 0
// 3. initialize a maxLength variable to 0
// 4. initialize a frequency map to keep track of the frequency of characters in the current window
// 5. loop through the string with the right pointer
// 6. if the character is not in the frequency map, add it to the map with a value of 

// pseudocode
// track char count in map
// expand window (add chars)
// shrink when too many distinct chars
// keep track of biggest valid window
// return maxLength

module.exports = function longestSubstringKDistinct(str, k) {
    // edge cases
    if (k === 0) return 0;
    if (str.length === 0) return 0;

    // initialize variables
    const charCount = new Map();
    let maxLength = 0;
    let start = 0;

    // expand window with end pointer
    for (let end = 0; end < str.length; end++) {
        const char = str[end];

        // add current character to our count
        charCount.set(char, (charCount.get(char) || 0) + 1);

        // shrink window while we have more than k distinct characters
        while (charCount.size > k) {
            const startChar = str[start];
            charCount.set(startChar, charCount.get(startChar) - 1);

            // remove character if count becomes 0
            if (charCount.get(startChar) === 0) {
                charCount.delete(startChar);
            }

            start++;
        }
        // update maxLength
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
};

// console.log(longestSubstringKDistinct("eceba", 2)); // 3
// console.log(longestSubstringKDistinct("aa", 1)); // 2
// console.log(longestSubstringKDistinct("abcdef", 3)); // 3
 // space complexity: O(min(k, n))
 // time complexity: O(n)
  