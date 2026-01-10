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


//  Hellper method recursion

/**
 * Collect all odd numbers from an array.
 */
export function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}