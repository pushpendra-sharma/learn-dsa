/**
 * Write a recursive function called flatten which
 * accepts an array of arrays and returns a new array
 * with all values flattened.
 */

export function flatten(array) {
  let result = [];

  for (const element of array) {
    if (Array.isArray(element)) {
      result = result.concat(flatten(element));
    } else {
      result.push(element);
    }
  }
  return result;
}

/**
 * @param {number} n
 * @returns {number}
 *
 * Time Complexity - O(n)
 * Space Complexity - O(1)
 */
export function factorialByRecursion(n) {
  if (n < 2) return 1;
  else return n * factorialByRecursion(n - 1);
}
