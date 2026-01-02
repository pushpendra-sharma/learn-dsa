import { expect, test } from "vitest";
import { diagonalDifference, diagonalDifferenceOptimized } from "../diagonalSum";

test("diagonalDifference - Standard 3x3 matrix", () => {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
  ];
  // Primary: 1 + 5 + 9 = 15
  // Secondary: 3 + 5 + 9 = 17
  // |15 - 17| = 2
  expect(diagonalDifference(matrix)).toBe(2);
  expect(diagonalDifferenceOptimized(matrix)).toBe(2);
});

test("diagonalDifference - Small 2x2 matrix", () => {
  const matrix = [
    [10, 5],
    [2, 3]
  ];
  // Primary: 10 + 3 = 13
  // Secondary: 5 + 2 = 7
  // |13 - 7| = 6
  expect(diagonalDifference(matrix)).toBe(6);
  expect(diagonalDifferenceOptimized(matrix)).toBe(6);
});

test("diagonalDifference - Matrix with negative numbers", () => {
  const matrix = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
  ];
  // Primary: 11 + 5 + (-12) = 4
  // Secondary: 4 + 5 + 10 = 19
  // |4 - 19| = 15
  expect(diagonalDifference(matrix)).toBe(15);
  expect(diagonalDifferenceOptimized(matrix)).toBe(15);
});

test("diagonalDifference - All identical numbers", () => {
  const matrix = [
    [5, 5, 5],
    [5, 5, 5],
    [5, 5, 5]
  ];
  // Primary: 15, Secondary: 15
  // |15 - 15| = 0
  expect(diagonalDifference(matrix)).toBe(0);
  expect(diagonalDifferenceOptimized(matrix)).toBe(0);
});

test("diagonalDifference - Single element matrix", () => {
  const matrix = [[10]];
  // Primary: 10, Secondary: 10
  // |10 - 10| = 0
  expect(diagonalDifference(matrix)).toBe(0);
  expect(diagonalDifferenceOptimized(matrix)).toBe(0);
});