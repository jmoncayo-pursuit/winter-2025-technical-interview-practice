const minimizedMaximum = require("./problem.js");

test("Test case 1", () => {
  const n = 7;
  const m = 3;
  const quantities = [10, 5, 8, 7, 4, 2, 6];
  const result = minimizedMaximum(n, m, quantities);
  expect(result).toBe(10);
});

test("Test case 2", () => {
  const n = 5;
  const m = 5;
  const quantities = [10, 10, 10, 10, 10];
  const result = minimizedMaximum(n, m, quantities);
  expect(result).toBe(10);
});

test("Test case 3", () => {
  const n = 3;
  const m = 2;
  const quantities = [7, 9, 5];
  const result = minimizedMaximum(n, m, quantities);
  expect(result).toBe(9);
});

test("Test case 4", () => {
  const n = 6;
  const m = 4;
  const quantities = [3, 5, 2, 4, 6, 1];
  const result = minimizedMaximum(n, m, quantities);
  expect(result).toBe(6);
});

test('Test case 5', () => {
  const n = 8;
  const m = 2;
  const quantities = [10, 5, 8, 7, 4, 2, 6, 3];
  const result = minimizedMaximum(n, m, quantities);
  expect(result).toBe(15);
});