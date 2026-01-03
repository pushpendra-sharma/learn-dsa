import { expect, test, describe } from "vitest";

import { countUniqueValues, countUniqueValuesWithArrayModifyInPlace } from "../multiplePointers";

describe("countUniqueValues", () => {
  test("should return the correct count for arrays with multiple unique values", () => {
    expect(countUniqueValues([1, 1, 1, 1, 1, 2])).toBe(2);
    expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toBe(7);
  });

  test("should return 0 for an empty array", () => {
    expect(countUniqueValues([])).toBe(0);
  });

  test("should handle arrays with negative numbers", () => {
    expect(countUniqueValues([-2, -1, -1, 0, 1])).toBe(4);
  });

  test("should return 1 for an array where all values are the same", () => {
    expect(countUniqueValues([5, 5, 5, 5])).toBe(1);
  });

  test("should return the array length if all values are already unique", () => {
    expect(countUniqueValues([1, 2, 3])).toBe(3);
  });
});

describe("countUniqueValuesWithArrayModifyInPlace", () => {
  test("should return the correct count for arrays with multiple unique values", () => {
    expect(countUniqueValuesWithArrayModifyInPlace([1, 1, 1, 1, 1, 2])).toBe(2);
    expect(countUniqueValuesWithArrayModifyInPlace([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toBe(7);
  });

  test("should return 0 for an empty array", () => {
    expect(countUniqueValuesWithArrayModifyInPlace([])).toBe(0);
  });

  test("should handle arrays with negative numbers", () => {
    expect(countUniqueValuesWithArrayModifyInPlace([-2, -1, -1, 0, 1])).toBe(4);
  });

  test("should return 1 for an array where all values are the same", () => {
    expect(countUniqueValuesWithArrayModifyInPlace([5, 5, 5, 5])).toBe(1);
  });

  test("should return the array length if all values are already unique", () => {
    expect(countUniqueValuesWithArrayModifyInPlace([1, 2, 3])).toBe(3);
  });
});
