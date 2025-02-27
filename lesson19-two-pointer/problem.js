/**
 * LeetCode Problem: Container With Most Water
 *
 * Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai).
 * n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0).
 * Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.
 *
 * Example 1:
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
 * In this case, the max area of water (blue section) the container can contain is 49.
 *
 * Example 2:
 * Input: heights = [1,1]
 * Output: 1
 *
 * Example 3:
 * Input: heights = [4,3,2,1,4]
 * Output: 16
 */

function maxArea(heights) {
  // 1. Use two pointers: one at the start and one at the end.
  // 2. Compute area: width = right - left, height = min(height[left], height[right]).
  let left = 0, right = heights.length - 1, maxArea = 0;
  
  while (left < right ) {
    let h = Math.min(heights[left], heights[right]);
    // 3. Track the max area.
    maxArea = Math.max(maxArea, h * (right - left));
    // 4. Move the pointer pointing to the shorter height inward (to find a taller line).

    // 5. Repeat until pointers meet.
    heights[left] < heights[right] ? left++ : right--;
  }
  return maxArea;
}
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
console.log(maxArea([1,1])); // 1
console.log(maxArea([4,3,2,1,4])); // 16
console.log(maxArea([1,2,1])); // 2

module.exports = maxArea;
