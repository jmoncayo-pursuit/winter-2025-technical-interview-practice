// Sliding Window - maxSubArraySum
// Given an array of integers and a number, write a function called maxSubArraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

// console.log(maxSubArraySum([100,200,300,400], 2)) // 700
// console.log(maxSubArraySum([1,4,2,10,23,3,1,0,20], 4))  // 39
// console.log(maxSubArraySum([-3,4,0,-2,6,-1], 2)) // 5
// console.log(maxSubArraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
// console.log(maxSubArraySum([2,3], 3)) // null

module.exports = function maxSubArraySum(arr, subArrLength) {
  // handle edge cases
  if (subArrLength <= 0) return 0;
   
  let minLength = Infinity;
  let currentSum = 0;
  let start = 0;

  // expand the window
  for (let end = 0; end < arr.length; end++) {
    currentSum += arr[end];

    // shrink the window while sum >= target 
    while (currentSum >= subArrLength) {
      minLength = Math.min(minLength, end - start + 1);
      currentSum -= arr[start];
      start++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
};
