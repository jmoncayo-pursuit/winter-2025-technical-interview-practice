function  hi () {
    console.log('hi')
}
// the || operator will return the first truthy value
const x = hi() || 0
console.log(x)
// the && operator will return the first falsy value
// && requires all values to be truthy
const y = 0  && hi()
console.log(y)

const removeNeighboursThatAddToEight = (arr) => {
    // set pointer to 0 
    let point = 0;
    // loop through the input until point is one less than length of n
    while (point < arr.length - 1) {
        // compare value at point to value after the pointer
        // if they add to 8 remove both values from the array
        if (arr[point] + arr[point + 1] === 8) {
            arr.splice(point, 2);
        }
        // if they do not add to 8 move the pointer to the next value
        else {
            point++;
        }


    }
    return arr;
}

console.log(removeNeighboursThatAddToEight([1, 2, 3, 5, 3, 4, 4, 5, 4, 3, 2, 1])); // [1, 2, 4, 5, 4, 3, 2, 1]


