import { expect, test } from "vitest";

import { minMaxSum, miniMaxSumOptimized } from "../minMaxSum";

test("minMaxSum", () => {
  expect(minMaxSum([1, 2, 3, 4, 5])).toBe("10 14");
  expect(minMaxSum([5, 4, 3, 2, 1])).toBe("10 14");
  expect(minMaxSum([5, 5, 5, 5, 5])).toBe("20 20");
  expect(minMaxSum([7, 69, 2, 221, 8974])).toBe("299 9271");
});

test("miniMaxSumOptimized", () => {
  expect(miniMaxSumOptimized([1, 2, 3, 4, 5])).toBe("10 14");
  expect(miniMaxSumOptimized([5, 4, 3, 2, 1])).toBe("10 14");
  expect(miniMaxSumOptimized([5, 5, 5, 5, 5])).toBe("20 20");
  expect(miniMaxSumOptimized([7, 69, 2, 221, 8974])).toBe("299 9271");
});
