// 1. Given an array create a function that returns the element at the center of the array;
// input: [1,2,3,4] output: 2;
// input: [1,2,3,4,5] output: 3

function getCenterElement(arr) {
  if (arr.length % 2 === 0) {
    // even length return lower middle element
    return arr[Math.floor(arr.length / 2) - 1];
  } else {
    // odd length return middle element
    return arr[Math.floor(arr.length / 2)];
  }
}
console.log(getCenterElement([1,2,3,4])); // 2

// 2. Given an array of integers return true if the array is sorted otherwise return false;
// input: [1,5,8,9,11] output: true
// input: [1,2,3,0] output: false

function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}
console.log(isSorted([1,5,8,9,11])); // true

// 3. Given an array and a value return the index where that value can be found. Otherwise, return -1.
// input [1,2,3,4,5], 3 output: 2
// input ["yellow", "blue", "green"], "purple" output: -1

function findIndex(arr, value) {
  return arr.indexOf(value);
}
console.log(findIndex([1,2,3,4,5], 3)); // 2