/* ====================== Multiple Pointers ========================== */

/**
 * Write a function that accepts a sorted array of integers and counts the uniques values in the array.
 * Can also do by frequency pattern.
 */
// Time Complexity - O(n)  Space Complexity - O(1)
export function countUniqueValues(nums) {
  if (nums.length === 0) return 0;
  let uniqueCount = 1;
  let p1 = 0;
  let p2 = 1;

  while (p2 < nums.length) {
    if (nums[p1] !== nums[p2]) {
      uniqueCount++;
    }
    p1++;
    p2++;
  }

  return uniqueCount;
}
/** Modifies the array in place */
// Time Complexity - O(n)  Space Complexity - O(1)
export function countUniqueValuesWithArrayModifyInPlace(nums) {
  if (nums.length < 2) return nums.length;

  let pointer1 = 0;
  let pointer2 = 1;
  while (pointer2 < nums.length) {
    if (nums[pointer2] === nums[pointer1]) {
      pointer2 = pointer2 + 1;
    } else {
      pointer1 = pointer1 + 1;
      nums[pointer1] = nums[pointer2];
    }
  }
  return pointer1 + 1;
}

export function subStringProblem(haystack, needle) {
  const n = haystack.length;
  const m = needle.length;

  if (m === 0) return 0;

  for (let i = 0; i <= n - m; i++) {
    let j = 0;
    while (j < m && haystack[i + j] === needle[j]) {
      j++;
    }
    if (j === m) {
      return i;
    }
  }

  return -1;
}

// Time Complexity - O(n + m)  Space Complexity - O(1)
export function isSubsequence(str1, str2) {
  if (str2.length < str1.length) return false;
  let count = 0;
  for (let c of str2) {
    if (str1[count] === c) {
      count++;
    }
  }
  return str1.length === count;
}
