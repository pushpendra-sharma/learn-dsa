import { expect, test, describe } from "vitest";

import {
  countUniqueValues,
  countUniqueValuesWithArrayModifyInPlace,
  isSubsequence,
  moveZeroes,
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

describe("isSubsequence", () => {
  test("should return true if str1 is a subsequence of str2", () => {
    expect(isSubsequence("hello", "hello world")).toBe(true);
    expect(isSubsequence("sing", "sting")).toBe(true);
    expect(isSubsequence("abc", "abracadabra")).toBe(true);
  });

  test("should return true when characters are non-consecutive but in order", () => {
    expect(isSubsequence("abc", "ahbgdc")).toBe(true);
  });

  test("should return false if characters are out of order", () => {
    expect(isSubsequence("abc", "acb")).toBe(false);
  });

  test("should return false if str1 is not contained in str2", () => {
    expect(isSubsequence("abc", "defgh")).toBe(false);
  });

  test("should return true for an empty first string (empty is a subsequence of all)", () => {
    expect(isSubsequence("", "abc")).toBe(true);
  });

  test("should return false if str2 is shorter than str1", () => {
    expect(isSubsequence("longer", "short")).toBe(false);
  });

  test("should handle exact matches", () => {
    expect(isSubsequence("testing", "testing")).toBe(true);
  });
});

describe("moveZeroes", () => {
  test("should move zeroes to the end in a mixed array", () => {
    const nums = [0, 1, 0, 3, 12];
    moveZeroes(nums);
    expect(nums).toEqual([1, 3, 12, 0, 0]);
  });

  test("should handle an array with a single zero", () => {
    const nums = [0];
    moveZeroes(nums);
    expect(nums).toEqual([0]);
  });

  test("should handle an array with no zeroes", () => {
    const nums = [1, 2, 3];
    moveZeroes(nums);
    expect(nums).toEqual([1, 2, 3]);
  });

  test("should handle an array of only zeroes", () => {
    const nums = [0, 0, 0];
    moveZeroes(nums);
    expect(nums).toEqual([0, 0, 0]);
  });

  test("should maintain relative order of non-zero elements", () => {
    const nums = [4, 2, 4, 0, 0, 3, 0, 5, 1, 0];
    moveZeroes(nums);
    expect(nums).toEqual([4, 2, 4, 3, 5, 1, 0, 0, 0, 0]);
  });

  test("should handle zeroes already at the end", () => {
    const nums = [1, 2, 0, 0];
    moveZeroes(nums);
    expect(nums).toEqual([1, 2, 0, 0]);
  });
});
