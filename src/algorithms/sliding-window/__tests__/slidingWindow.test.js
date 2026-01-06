import { describe, test, expect } from "vitest";
import { maxSubarraySum } from "../slidingWindow";

describe("maxSubarraySum() - Sliding Window Pattern", () => {
  test("should find the maximum sum of a fixed-size subarray", () => {
    expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)).toBe(10);
    expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)).toBe(17);
    expect(maxSubarraySum([4, 2, 1, 6], 1)).toBe(6);
  });

  test("should handle arrays with negative numbers", () => {
    expect(maxSubarraySum([2, 3, -6, 5, -1], 2)).toBe(5);
  });

  test("should return the sum of the whole array if num equals array length", () => {
    expect(maxSubarraySum([2, 3], 2)).toBe(5);
  });

  test("should return null if the array is shorter than the window size (num)", () => {
    expect(maxSubarraySum([1, 2], 3)).toBe(null);
    expect(maxSubarraySum([], 1)).toBe(null);
  });

  test("should handle cases where all elements are the same", () => {
    expect(maxSubarraySum([4, 4, 4, 4], 2)).toBe(8);
  });
});
