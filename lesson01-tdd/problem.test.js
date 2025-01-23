const isPalindrome = require('./problem');

describe('isPalindrome', () => {
  // Simplest valid cases
  test('empty string should be palindrome', () => {
    expect(isPalindrome('')).toBe(true);
  });

  test('single character should be palindrome', () => {
    expect(isPalindrome('a')).toBe(true);
  });

  // Simple cases
  test('basic palindrome should return true', () => {
    expect(isPalindrome('mom')).toBe(true);
  });

  test('non-palindrome should return false', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  // Complex cases
  test('palindrome with spaces should return true', () => {
    expect(isPalindrome('race car')).toBe(true);
  });

  test('palindrome with mixed case should return true', () => {
    expect(isPalindrome('RaCeCaR')).toBe(true);
  });

  // Edge cases
  test('palindrome with special characters should return true', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });

  test('palindrome with numbers should work', () => {
    expect(isPalindrome('12321')).toBe(true);
  });

  // Non-string input cases
  test('number input should return false', () => {
    expect(isPalindrome(12321)).toBe(false);
  });

  test('array input should return false', () => {
    expect(isPalindrome(['a', 'b', 'a'])).toBe(false);
  });

  test('object input should return false', () => {
    expect(isPalindrome({})).toBe(false);
  });

  test('null input should return false', () => {
    expect(isPalindrome(null)).toBe(false);
  });

  test('undefined input should return false', () => {
    expect(isPalindrome(undefined)).toBe(false);
  });
});
