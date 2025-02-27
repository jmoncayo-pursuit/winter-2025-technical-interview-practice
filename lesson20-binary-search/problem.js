// Write a function binarySearch that takes a sorted array of integers and a target integer. The function should return the index of the target in the array if it exists. If the target does not exist, return -1.

// arr (array of integers): A sorted array of integers in ascending order. The array may contain duplicate values.
// target (integer): The value to search for in the array.

module.exports = function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // found target
    } else if (arr[mid] < target) {
      left = mid + 1; /// check right half
    } else {
      right = mid - 1; // check left half
    }
  }
  return -1; // target not found
};
