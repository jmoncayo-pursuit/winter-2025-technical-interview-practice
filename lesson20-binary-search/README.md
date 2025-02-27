# Lesson #: Binary Search

## Warm-up (10 minutes)

To get started, let's refresh our memory on some fundamental concepts:

1. **Array**: A data structure that stores elements in a sequential manner.

2. **Search Algorithm**: A method to find a specific element in an array or other data structure.

3. **Linear Search**: A simple search algorithm that checks each element in the array one by one until the desired element is found.

## Written Question (5 minutes)

**Question**: Explain in your own words what a binary search algorithm is and why it is more efficient than a linear search in a sorted array.
  - a binary search algorithm divides a sorted array in half by comparing the middle element with the target value 
  - By eliminating half of the remaining elements with each comparison, a binary search is 0(log n) 
  - a linear search's O(n) complexity since it checks each element sequentially. 
  
## Lecture Content (20 minutes)

**Introduction to Binary Search**
Binary search is a highly efficient search algorithm that finds the position of a target value within a sorted array. Unlike linear search, which checks each element one by one, binary search repeatedly divides the search interval in half, making it much faster.

### How Binary Search Works

1. **Initial Setup**: Identify the starting (low) and ending (high) indices of the array.

2. **Calculate Midpoint**: Find the midpoint index (mid) of the current interval.

3. **Comparison**:

- If the target value is equal to the midpoint element, the search is successful.

- If the target value is less than the midpoint element, focus on the left half of the array.

- If the target value is greater than the midpoint element, focus on the right half of the array.

4. **Repeat Steps**: Continue the process until the target value is found or the interval is empty.

**Binary Search in JavaScript**
Here is a simple pseudo code:

- set a left and right variable to the first and last indexes
- as long as left is less than right
  - determine the mid index by adding left and right to each other and then dividing by 2
  - check to see if the element at the middle index is your target
  - if yes return index
  - if no
    - if value at index is larger, set right to index plus one
    - if value at index is smaller, set left to index minus one

**Complexity**

- **Time Complexity**: O(log n), where n is the number of elements in the array.

- **Space Complexity**: O(1), since it uses constant extra space.

## Problem Solving (35 minutes)

Let's solve some problems to reinforce our understanding.

**Problem 1: Basic Binary Search**
Given a sorted array `[1, 3, 5, 7, 9, 11, 13]`, use binary search to find the position of the element `7`.

**Solution**:

1. Set `low = 0` and `high = 6` (length of array - 1).

2. Calculate `mid = Math.floor((0 + 6) / 2) = 3.`

3. Compare `arr[3]` (which is 7) with 7.

4. Since `arr[3]` is equal to `7`, the target value is found at index `3`.

**Problem 2: Target Not Found**
Given a sorted array `[2, 4, 6, 8, 10, 12]`, use binary search to find the position of the element `5`.

**Solution:**

1. Set `low = 0` and `high = 5`.

2. Calculate m`id = Math.floor((0 + 5) / 2) = 2`.

3. Compare `arr[2]` (which is `6`) with `5`.

4. Since` 5` is less than `6`, update `high = mid - 1 = 1`.

5. Calculate `mid = Math.floor((0 + 1) / 2) = 0`.

6. Compare `arr[0]` (which is `2`) with `5`.

7. Since `5` is greater than `2`, update `low = mid + 1 = 1`.

8. Calculate `mid = Math.floor((1 + 1) / 2) = 1`.

9. Compare `arr[1]` (which is `4`) with `5`.

10. Since `5` is greater than `4`, update `low = mid + 1 = 2`.

11. Now `low` is greater than `high`, so the target value `5` is not in the array.

## Recap (15 minutes)

Let's recap what we've learned:

1. **Binary Search**: A search algorithm that efficiently finds the position of a target value in a sorted array by repeatedly dividing the search interval in half.

2. **Implementation**: Key steps include setting the initial low and high indices, calculating the midpoint, and comparing the target value with the midpoint element.

3. **Complexity**: Binary search has a time complexity of O(log n) and a space complexity of O(1).

## Additional Resources

-[Binary Search Algorithm in 100 Seconds](https://youtu.be/MFhxShGxHWc?si=RH3Qu4_fLVosQXBu)
