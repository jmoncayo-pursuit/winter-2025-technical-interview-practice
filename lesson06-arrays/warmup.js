// 1. Counting: create a function that prints out the numbers 1-10

function printNumbers () {
    for(let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
// 2. Evens: create a function that prints out the even numbers 1-20
function printEven () {
    const evens = [];
    for (let i = 2; i <= 20; i += 2 ) {
        evens.push(i);
    }
    return evens;
}
// 3. FizzBuzz: create a function that prints out the numbers 1-100. If the number is divisible by 3, print "Fizz" instead of the number. If the number is divisible by 5, print "Buzz" instead of the number. If the number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.

function FizzBuzz () {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 ===0) {
            console.log("FizzBuzz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
}
// console.log(FizzBuzz()); // 
console.log(printEven());
// console.log(printNumbers());