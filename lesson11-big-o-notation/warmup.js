// Prompt 1: Find if an item is repeated in an array. Given an array of integers, find if an integer appears more than once in the array.
const hasDuplicate = (nums) => {
        let map = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (map.has(nums[i])) return true;
        }
        return false
};
console.log(hasDuplicate([1, 2, 3])); // false

// Prompt 2: Count occurrences of a letter from one string in another string. Given two strings, find the number of times a letter from the first string appears in the second string.
const countLetterOccurrences = (str1, str2) => {
    let count = 0;
    let map = new Map();
    for (let i = 0; i< str1.length; i++) {
        map.set(str1[i], true);
    }
    for (let i = 0; i < str2.length; i++) {
        if (map.has(str2[i])) count++;
    }
    return count;
};

console.log(countLetterOccurrences("hello", "world")); // 2

// Prompt 3: Find the maximum difference between two elements in an array. Given an array of integers, find the maximum difference between any two elements in the array.
const maxDifference = (nums) => {
    let min = nums[0];
    let maxDiff = 0;
    for (let i = 1; i < nums.length; i++) {
        maxDiff = Math.max(maxDiff, nums[i] - min);
        min = Math.min(min, nums[i]);
    }
    return maxDiff;
};

console.log(maxDifference([1, 2, 3])); // 2    