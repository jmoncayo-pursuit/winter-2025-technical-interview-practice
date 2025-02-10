// Please use array methods such as .map(), .filter(), .reduce(), .every(), .some(), and .find() to solve the following prompts.

// Prompt 1: Write a function that takes an array of numbers as input and returns a new array with only the even numbers.
        function evenNumbers(arr) {
            return arr.filter((num) => num % 2 === 0);
        }

// Prompt 2: Write a function that takes an array of strings as input and returns a new array with the lengths of each string.
        function stringLengths(arr) {
            return arr.map((str) => str.length);
        }

// Prompt 3: Write a function that takes an array of objects representing students, where each object has a "name" and "age" property. Return a new array with only the names of the students who are above 18 years old.
        function studentsOver18(arr) {
            return arr.filter((student) => student.age > 18).map((student) => student.name);
        }

// example of where i'd see factorial used in a  problem
// Prompt 4: Write a function that takes a positive integer n as input and returns the factorial of n.
        function factorial(n) {
            if (n === 0) return 1;
            return n * factorial(n - 1);
        }
        // combinatronics is a branch of mathematics that deals with counting, especially counting the possible combinations of elements in a set.
console.log(evenNumbers([1, 2, 3, 4, 5])); // [2, 4]
console.log(stringLengths(["hello", "world"])); // [5, 5]
console.log(studentsOver18([{ name: "Alice", age: 20 }, { name: "Bob", age: 17 }, { name: "Charlie", age: 24 }])); // ["Alice", "Charlie"]
console.log(factorial(5)); // 120