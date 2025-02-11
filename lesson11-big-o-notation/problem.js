/**
 * Problem: Implement a function that determines if a given year is a leap year. A leap year is a year that is divisible by 4, but not divisible by 100, unless it is divisible by 400. For example, 2000 is a leap year, but 1900 is not.
 * This should ideally run in O(1) time.
 */

function isLeapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  }
  if (year % 400 === 0) {
    return true;
  }
  return false;
}

module.exports = isLeapYear;
console.log(isLeapYear(2000)); // Expected output: true
