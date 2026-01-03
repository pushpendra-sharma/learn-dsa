import { expect, test, describe } from "vitest";
import { removeElement } from "../removeElement";

describe("removeElement", () => {
  test("should remove occurrences and return correct k (Example 1)", () => {
    const nums = [3, 2, 2, 3];
    const val = 3;
    const k = removeElement(nums, val);

    expect(k).toBe(2);
    const result = nums.slice(0, k).sort();
    expect(result).toEqual([2, 2]);
  });

  test("should handle multiple occurrences and return correct k (Example 2)", () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2];
    const val = 2;
    const k = removeElement(nums, val);

    expect(k).toBe(5);
    const result = nums.slice(0, k).sort();
    expect(result).toEqual([0, 0, 1, 3, 4]);
  });

  test("should return 0 when all elements match val", () => {
    const nums = [2, 2, 2];
    const val = 2;
    const k = removeElement(nums, val);

    expect(k).toBe(0);
  });

  test("should return original length when no elements match val", () => {
    const nums = [1, 2, 3];
    const val = 5;
    const k = removeElement(nums, val);

    expect(k).toBe(3);
    expect(nums.slice(0, k).sort()).toEqual([1, 2, 3]);
  });

  test("should handle empty arrays", () => {
    const nums = [];
    const val = 0;
    const k = removeElement(nums, val);

    expect(k).toBe(0);
    expect(nums).toEqual([]);
  });
});
