// 1. Given an integer, n, between 3 and 100, return a line with n '*' characters

// 5 => '*****'
// 12 => '************'
// 3 => "***"

function printStars(n) {
  return '*'.repeat(n);
}

// 2. Given an integer, n, between 3 and 100,
// return a line n characters long where the first and last character are '*' and all the middle characters are a space.

// 5 => '*   *'
// 12 => '*          *'

function printStarsWithSpaces(n) {
  // Generate the first and last line of stars
  const firstAndLastLine = '*' + ' '.repeat(n - 2) + '*';

  return firstAndLastLine;
}

// 3. Given two integers, n and m, create n lines of m characters.
// The first and last line should be made of all '*' and all the middle lines should start and end with '*' and have all spaces in the middle

// 5,5 => *****
//        *   *
//        *   *
//        *   *
//        *****

function createPattern(n, m) {
  const result = [];

  // Add the first line of stars
  result.push(printStars(m));

  // Add the middle lines with spaces
  for (let i = 0; i < n - 2; i++) {
    result.push(printStarsWithSpaces(m));
  }

  // Add the last line of stars
  result.push(printStars(m));

  return result.join('\n');
}

// Console.log the result of each of the above functions to test them.
// Run your file with node warmup.js and check the terminal for the correct output.
console.log(printStars(5));
console.log(printStarsWithSpaces(5));
console.log(createPattern(5, 5));