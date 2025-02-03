// Prompt 1: Sum of Array Write a function called sumArray that takes an array of numbers as input and returns the sum of all the numbers in the array.
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum+= arr[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3])); // 6

// Prompt 2: Find Maximum Write a function called findMax that takes an array of numbers as input and returns the maximum number in the array.
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([1, 2, 3])); // 3
// Prompt 3: Reverse Array Write a function called reverseArray that takes an array as input and returns a new array with the elements in reverse order.
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}
console.log(reverseArray([1, 2, 3])); // [3, 2, 1]
