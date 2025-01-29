/**
 * Given a string s, find the length of the longest substring
 * without repeating characters.
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  const set = new Set();
  let maxLength = 0, start = 0;
  
  for (let end = 0; end < s.length; end++) {
    while (set.has(s[end])) {
      set.delete(s[start++]);
    }
    set.add(s[end]);
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}
console.log(lengthOfLongestSubstring("abcabcbb")); // 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb"));    // 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew"));   // 3 ("wke")

module.exports = lengthOfLongestSubstring;
