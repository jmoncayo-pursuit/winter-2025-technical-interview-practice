const checkLargestElement = require("./problem");

describe("checkLargestElement", () => {
  test("should return the largest element in an array of positive numbers", () => {
    const nums = [1, 3, 9, 2];
    expect(checkLargestElement(nums)).toBe(9);
  });
  test("should return the largest element in an array of negative numbers", () => {
    const nums = [-7, -2, -5, -1];
    expect(checkLargestElement(nums)).toBe(-1);
  });
  test("should return the largest element in an array of mixed numbers", () => {
    const nums = [-7, 5, -5, 1];
    expect(checkLargestElement(nums)).toBe(5);
  });
  test("should return -1 if the array is empty", () => {
    const nums = [];
    expect(checkLargestElement(nums)).toBe(-1);
  });
  test("should return -1 if the array has only one element", () => {
    const nums = [1];
    expect(checkLargestElement(nums)).toBe(-1);
  }); 
  test("should return -1 if the largest element is not at least twice as much as every other number", () => {
    const nums = [1, 2, 3, 4];
    expect(checkLargestElement(nums)).toBe(-1);
  });
  test("should return -1 if all elements are equal", () => {
    const nums = [1, 1, 1, 1];
    expect(checkLargestElement(nums)).toBe(-1);
  }) 
});
