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

function reversedArray2pointer(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}
console.log(reversedArray2pointer([1, 2, 3])); // [3, 2, 1]

// how slice works is that it takes two arguments, the first is the starting index and the second is the ending index. The ending index is exclusive, so it will not include the element at that index. If you only provide one argument, it will start at that index and go to the end of the array.

// pop removes the last element from an array and returns that element. It changes the length of the array.
// shift removes the first element from an array and returns that element. It changes the length of the array.
// unshift adds one or more elements to the beginning of an array and returns the new length of the array.
// push adds one or more elements to the end of an array and returns the new length of the array.

[1,2,3,4,5].forEach(function(num){
    console.log(num * num);
})

const arr = [1,2,3,4,5];

for (let num of arr) {
    console.log(num);
}

// map is a higher order function that takes a callback function as an argument and applies that callback function to each element in an array. It returns a new array with the results of the callback function applied to each element. Basically it creates a new array with the results of calling a provided function on every element in the calling array.
// we use map in react to render a list of items
// filter is a higher order function that takes a callback function as an argument and applies that callback function to each element in an array. It returns a new array with only the elements that return true from the callback function. Basically it creates a new array with all elements that pass the test implemented by the provided function.

//indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. time complexity is O(n) because it has to iterate through the array to find the element.

// what kind of sort () method is used in javascript?
// The default sort order is according to string Unicode code points. The time complexity of the sort method is O(n log n) because it uses a comparison sort algorithm. The sort method sorts the elements of an array in place and returns the sorted array.
// browsers vary in sort method implementation, so it is not guaranteed to be stable. A stable sort is one that preserves the relative order of equal elements.
// chrome uses quicksort for arrays with more than 10 elements and insertion sort for arrays with less than 10 elements.
// firefox uses merge sort for arrays with more than 10 elements and insertion sort for arrays with less than 10 elements.
// safari uses quicksort for arrays with more than 10 elements and insertion sort for arrays with less than 10 elements.
// edge uses quicksort for arrays with more than 10 elements and insertion sort for arrays with less than 10 elements.
// quicksort is a comparison sort and is not stable. It has an average time complexity of O(n log n) and a worst-case time complexity of O(n^2). It is not guaranteed to be stable.
// timsort is a hybrid sorting algorithm derived from merge sort and insertion sort. It is used in python and java. It is a stable sort and has a time complexity of O(n log n). It is a combination of merge sort and insertion sort. It is used in chrome and firefox for sorting arrays with more than 10 elements.

// way to understand o(n log n) is to think of it as a tree. The height of the tree is log n and the number of nodes is n. The number of comparisons is the number of nodes in the tree. The number of comparisons is n log n.
