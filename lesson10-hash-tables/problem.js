/**
 * Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 *
 * @param {number[]} nums - An array of integers.
 * @param {number} target - The target sum.
 * @return {number[]} - An array containing the indices of the two numbers that add up to the target.
 */
const twoSum = (nums, target) => {
  let map = new Map(); 
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  } 
};

module.exports = twoSum;
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([-3, 4, 3, 90], 0)); // [0, 2]
console.log(twoSum([1, 3, 2, 20, 5, 6], 26)); // [3, 5]

// difference between a hashmap and an array
// hashmap is a data structure that stores key-value pairs.
// array is a data structure that stores elements in contiguous memory locations.
// What's better a hash table or an array? Explain.
// hash table is better because it has a faster lookup time than an array.
// hash table has a time complexity of O(1) for lookup, insertion, and deletion.
// array has a time complexity of O(n) for lookup, insertion, and deletion.