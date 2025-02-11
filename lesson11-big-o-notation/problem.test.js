const isLeapYear = require('./problem');
describe('isLeapYear', () => {
  it('should return true for years divisible by 4 but not by 100', () => {
    expect(isLeapYear(2004)).toBe(true);
    expect(isLeapYear(1996)).toBe(true);
  });

  it('should return false for years not divisible by 4', () => {
    expect(isLeapYear(2003)).toBe(false);
    expect(isLeapYear(1997)).toBe(false);
  });

  it('should return true for years divisible by 400', () => {
    expect(isLeapYear(2000)).toBe(true);
    expect(isLeapYear(1600)).toBe(true);
  });

  it('should return false for years divisible by 100 but not by 400', () => {
    expect(isLeapYear(1900)).toBe(false);
    expect(isLeapYear(1700)).toBe(false);
  });
});

// Test cases
console.log(isLeapYear(2000)); // Expected output: true
console.log(isLeapYear(1900)); // Expected output: false
console.log(isLeapYear(2024)); // Expected output: true
console.log(isLeapYear(2021)); // Expected output: false
console.log(isLeapYear(1600)); // Expected output: true
console.log(isLeapYear(1700)); // Expected output: false
console.log(isLeapYear(1800)); // Expected output: false
console.log(isLeapYear(2100)); // Expected output: false
