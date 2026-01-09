import { describe, test, expect } from "vitest";
import { factorialByRecursion, flatten } from "./recursion";

describe("flatten()", () => {
  test("should flatten a simple nested array", () => {
    expect(flatten([1, 2, 3, [4, 5]])).toEqual([1, 2, 3, 4, 5]);
  });

  test("should flatten multiple levels of nesting", () => {
    expect(flatten([1, [2, [3, 4], [[5]]]])).toEqual([1, 2, 3, 4, 5]);
  });

  test("should handle an array that is already flat", () => {
    expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("should return an empty array when given an empty array", () => {
    expect(flatten([])).toEqual([]);
    expect(flatten([[], [[]], [[[]]]])).toEqual([]);
  });

  test("should handle arrays containing different data types", () => {
    expect(flatten(["a", ["b", ["c"]]])).toEqual(["a", "b", "c"]);
    expect(flatten([true, [false, [true]]])).toEqual([true, false, true]);
  });

  test("should handle a mix of empty and non-empty nested arrays", () => {
    expect(flatten([[1], [], [2, 3], [[4]]])).toEqual([1, 2, 3, 4]);
  });
});

describe("factorialByRecursion()", () => {
  test("should return 1 for the base case of 0", () => {
    expect(factorialByRecursion(0)).toBe(1);
  });

  test("should return 1 for the base case of 1", () => {
    expect(factorialByRecursion(1)).toBe(1);
  });

  test("should calculate the factorial of small positive integers", () => {
    expect(factorialByRecursion(2)).toBe(2);
    expect(factorialByRecursion(3)).toBe(6);
    expect(factorialByRecursion(4)).toBe(24);
  });

  test("should calculate the factorial of larger integers", () => {
    expect(factorialByRecursion(5)).toBe(120);
    expect(factorialByRecursion(7)).toBe(5040);
  });

  test("should handle the recursive logic correctly for 10", () => {
    expect(factorialByRecursion(10)).toBe(3628800);
  });
});
