import { expect, test, describe } from "vitest";

import { same } from "../sameArray";

// All unit tests written using AI
describe("same function", () => {
  test("should return true when all values have corresponding squared values", () => {
    expect(same([1, 2, 3], [4, 1, 9])).toBe(true);
    expect(same([1, 2, 1], [4, 1, 1])).toBe(true);
  });

  test("should return false when lengths are different", () => {
    expect(same([1, 2, 3], [1, 9])).toBe(false);
  });

  test("should return false when frequencies do not match", () => {
    expect(same([1, 2, 2], [4, 4, 4])).toBe(false);
    expect(same([1, 2, 3], [1, 9, 9])).toBe(false);
  });

  test("should return false if the squared values are missing", () => {
    expect(same([1, 2, 3], [1, 4, 11])).toBe(false);
  });

  test("should handle empty arrays", () => {
    expect(same([], [])).toBe(true);
  });

  test("should handle unsorted arrays", () => {
    expect(same([4, 2, 1, 5], [25, 1, 4, 16])).toBe(true);
  });
});
