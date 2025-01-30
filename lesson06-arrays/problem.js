// Prompt: Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.

/**
 * Checks if the largest element in the array is at least twice as much as every other number.
 * @param {number[]} nums - The integer array.
 * @returns {number} - The index of the largest element if it meets the condition, otherwise -1.
 */
function checkLargestElement(nums) {
  if (nums.length === 0) return -1; // handle empty array case
  let maxIndex = 0;

  // find the index of the largest element
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[maxIndex]) {
      maxIndex = i;
    }
  }

  // check if the largest element is at least twice as much as every other number
  for (let i = 0; i < nums.length; i++) {
    if (i !== maxIndex && nums[maxIndex] < 2 * nums[i]) {
      return -1; // return -1 if the condition is not met
    }
  }

  return nums[maxIndex]; // return the largest element's value
}

module.exports = checkLargestElement;
