import { expect, test, describe } from "vitest";

import {
  countUniqueValues,
  countUniqueValuesWithArrayModifyInPlace,
  subStringProblem,
} from "../multiplePointers";

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
    expect(
      countUniqueValuesWithArrayModifyInPlace([
        1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13,
      ])
    ).toBe(7);
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

describe("subStringProblem() - Needle in a Haystack", () => {
  test("should return the index of the first occurrence", () => {
    expect(subStringProblem("sadbutsad", "sad")).toBe(0);
    expect(subStringProblem("hello", "ll")).toBe(2);
    expect(subStringProblem("leetcode", "leeto")).toBe(-1);
  });

  test("should return 0 when the needle is an empty string", () => {
    expect(subStringProblem("any-string", "")).toBe(0);
  });

  test("should return -1 when the needle is longer than the haystack", () => {
    expect(subStringProblem("abc", "abcd")).toBe(-1);
  });

  test("should return -1 when the needle is not present", () => {
    expect(subStringProblem("mississippi", "issip")).toBe(4);
    expect(subStringProblem("mississippi", "middle")).toBe(-1);
  });

  test("should be case sensitive", () => {
    expect(subStringProblem("Hello World", "hello")).toBe(-1);
  });

  test("should handle repeating patterns correctly", () => {
    expect(subStringProblem("aaaaa", "bba")).toBe(-1);
    expect(subStringProblem("mississippi", "pi")).toBe(9);
  });
});
