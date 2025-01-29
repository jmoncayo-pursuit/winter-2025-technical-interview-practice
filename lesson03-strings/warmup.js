// 1. Given two strings, return true if the strings are anagrams and false if not. Ignore spaces.

// "aba", "baa" => true
// "hub", "huc" => false
// "aa bb", "a b a b" => true
// "ABA", "aba" => false
//  "aabbb", "baabb" => true
// "a&!#bb", "aaabbbb" => false
//  "a&!#bb", "abb" => true

function areAnagrams(str1, str2) {
  // Remove spaces and non-alphabetic characters
  const cleanStr1 = str1.replace(/[^a-zA-Z]/g, '');
  const cleanStr2 = str2.replace(/[^a-zA-Z]/g, '');

  // Early exit if lengths differ
  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  // Create a frequency map for the first string
  const charCount = {};

  for (const char of cleanStr1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Check against the second string
  for (const char of cleanStr2) {
    if (!charCount[char]) {
      return false; // Character not found or exhausted
    }
    charCount[char]--;
  }

  return true; // All characters matched
}

console.log(areAnagrams("aba", "baa")); // true)
console.log(areAnagrams("hub", "huc")); // false)
console.log(areAnagrams("aa bb", "a b a b")); // true)
console.log(areAnagrams("ABA", "aba")); // false)
console.log(areAnagrams("aabbb", "baabb")); // true)    
console.log(areAnagrams("a&!#bb", "aaabbbb")); // false)
console.log(areAnagrams("a&!#bb", "abb")); // true)

// 2. Solve the same problem as above but do not sort the strings. What is the difference in time complexity when we don't sort the strings?

// "aba", "baa" => true
// "hub", "huc" => false
// "aa bb", "a b a b" => true
// "ABA", "aba" => false
//  "aabbb", "baabb" => true
// "a&!#bb", "aaabbbb" => false
//  "a&!#bb", "abb" => true

function areAnagramsWithoutSorting (str1, str2) {
    return areAnagrams(str1, str2); // reusing function above
}

console.log(areAnagramsWithoutSorting("aba", "baa")); // true
console.log(areAnagramsWithoutSorting("hub", "huc")); // false
console.log(areAnagramsWithoutSorting("aa bb", "a b a b")); // true
console.log(areAnagramsWithoutSorting("ABA", "aba")); // false
console.log(areAnagramsWithoutSorting("aabbb", "baabb")); // true
console.log(areAnagramsWithoutSorting("a&!#bb", "aaabbbb")); // false
console.log(areAnagramsWithoutSorting("a&!#bb", "abb")); // true

// 3. Given two strings, how many characters would need to be added or replaced in order to make them anagrams

// "abad", "abcd" => 1
//  "aabb", "baba" => 0
// "aaaazzzz", "bbbbwwww" => 8

function countChangesToMakeAnagrams(str1, str2) {
    // check if anagrams
    if (areAnagrams(str1, str2)) {
        return 0; // if no changes needed
    }
    const charCount = {}; 
    //count chars in first str
    for (const char of str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // count chars in second str
    for (const char of str2) {
        charCount[char] = (charCount[char] || 0) - 1;
    }

    // calc number of changes needed
    let changes = 0;
    for (const count of Object.values(charCount)) {
        changes += Math.abs(count); // adding absolute value of cout
    }
    return changes / 2; // each change counts for 2 
}

console.log(countChangesToMakeAnagrams("abad", "abcd")); // 1
console.log(countChangesToMakeAnagrams("aabb", "baba")); // 0
console.log(countChangesToMakeAnagrams("aaaazzzz", "bbbbwwww")); // 8