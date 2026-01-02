/**
Given a square matrix, calculate the absolute difference between the sums of its diagonals.
https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true
 */

/* Time complexity - O(n^2) */
export function diagonalDifference(arr) {
  let primarySum = 0;
  let secondarySum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) primarySum += arr[i][j];
      if (i + j === arr.length - 1) secondarySum += arr[i][j];
    }
  }

  return Math.abs(primarySum - secondarySum);
}

/* Time complexity - O(n) */
export function diagonalDifferenceOptimized(arr) {
  let primarySum = 0;
  let secondarySum = 0;

  for (let i = 0; i < arr.length; i++) {
    primarySum += arr[i][i];
    secondarySum += arr[i][arr.length - 1 - i];
  }

  return Math.abs(primarySum - secondarySum);
}
