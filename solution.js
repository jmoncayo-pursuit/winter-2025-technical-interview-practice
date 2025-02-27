/* 
View
Try
Insights
Skills:Problem Solving (Basic)
Recommended Time: 24 mins
Points: 50
14 test cases (5 samples)
CodingStrings EASYAlgorithms Problem Solving Interviewer Guidelines
For each word in a list of words, if any two adjacent characters are equal, change one of them. Determine the minimum number of substitutions so the final string contains no adjacent equal characters.

Example

words = ['add', 'boook', 'break']

'add': change one d (1 change)
'boook': change the middle o (1 change)
'break': no changes are necessary (0 changes)

The return array is [1,1,0].

Sample Input 0

STDIN Function Parameters

---

5 → words[] Size = 5
ab → words[] = [ 'ab','aab','abb', 'abab','abaaaba' ]
aab  
abb  
abab  
abaaaba

Sample Output 0

0
1
1
0
1

Function Description

Complete the function minimalOperations in the editor below.

minimalOperations has the following parameter(s):

    string words[n]:  an array of strings

    Returns:

    int[n]: each element i is the minimum substitutions for words[i]

Constraints

1 ≤ n ≤ 100
2 ≤ length of words[i] ≤ 105
Each character of words[i] is in the range ascii[a-z].
*/ 
const minimalOperations = (array) => {
    let map = new Map();
    for (let i = 0; i < array.length; i++) {
        if (!map.has(array[i])) map.set(array[i], 1);
    }
    return map.size;
}

let words = ["ab", "aab", "abb", "abab", "abaaaba"];
let words2 = ["add", "boook", "break"];
console.log(minimalOperations(["ab", "aab", "abb", "abab", "abaaaba"])); // [0, 1, 1, 0, 1]
console.log(minimalOperations(["add", "boook", "break"])); // [1, 1, 0]

const minimalOperationsForLoopsPush = (array) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let changCount = 0;
        let word = words[i]
        for (let j = 0; j < word.length - 1; j++) {
            if (word[j] === word[j + 1]) changCount++;
        }
        result.push(changCount);
    }
}

console.log(minimalOperationsForLoopsPush(["ab", "aab", "abb", "abab", "abaaaba"])); // [0, 1, 1, 0, 1]
console.log(minimalOperationsForLoopsPush(["add", "boook", "break"])); // [1, 1, 0]
function howMany(sentence) {
  let words = sentence.split(/\s+/);
  let count = 0;

  for (let word of words) {
    word = word.replace(/[,.?!]+$/, "");

    if (/^[a-zA-Z]+(-[a-zA-Z]+)*$/.test(word)) {
      count++;
    }
  }

  return count;
}

let sentence =
  "he is a good programmer, he won 865 competitions, but sometimes he dont. What do you think? All test-cases should pass. Done-done?";

console.log(howMany(sentence)); //21

// dollar sign in regex means end of string
// plus sign in regex means one or more

// no pairs allowed 

// how  many words

// sql credential