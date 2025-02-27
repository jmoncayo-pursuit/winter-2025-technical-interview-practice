# Lesson 19: Two Pointers Continued

## Warm-up (10 minutes)

## Written Question (5 minutes)

- Question: Explain in your own words why the two-pointer technique is more efficient than a nested loop approach for solving problems like finding a pair that sums to a specific target in a sorted array.

    two-pointer is more efficient than nested loops because its time complexity is O(n) - only one pass through the array
    nested loops approach is O(n²) since they would need to check every possible pair. 

    - two-pointers start from opposite ends of a sorted array. 
    - move inward based on comparision with target sum
    - if sum is too large, move right pointer left
    - if sum is too small, move left pointer right
    - once found, return the pair

## Lecture Content (20 minutes)

Detailed Explanation of Technique Variations:

Discuss different variations such as the slow-fast pointer technique used in cycle detection in a linked list.
    - slow faster pointer technigue (floyd's cycle detection) is a powerful variation of the two-pointer approach, primarily used for cycle detection in linked lists. 
    - 

Explain how pointers can be used to implement sliding window techniques for substring problems.
Efficiency and Practicality:

Dive deeper into the computational complexity of using two pointers versus other methods like binary search on certain problems.
Examples where two pointers are the only feasible solution to keep the space complexity minimal.
Advanced Use Cases:

Triplet sum to zero (a variation of two-sum problem but extends to three numbers).
Minimum window substring (an application of the sliding window technique).

## Problem Solving (35 minutes)

## Recap (15 minutes)

## Additional Resources

- https://www.youtube.com/shorts/kiwPOvCj9Go
