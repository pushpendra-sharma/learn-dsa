export function minMaxSum(arr) {
  let minNum = arr[0];
  let maxNum = arr[0];
  let minSum = 0;
  let maxSum = 0;

  for (const n of arr) {
    if (n > maxNum) maxNum = n;
    if (n < minNum) minNum = n;
  }

  for (const m of arr) {
    if (minNum === maxNum) {
      maxSum += m;
      minSum += m;
    } else {
      if (m !== maxNum) minSum += m;
      if (m !== minNum) maxSum += m;
    }
  }
  if (minNum === maxNum) {
    maxSum -= arr[0];
    minSum -= arr[0];
  }

  return `${minSum} ${maxSum}`;
}

// Time complexity - O(n)
// Space complexity - O(1)
export function miniMaxSumOptimized(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (const n of arr) {
    sum += n;
    if (n < min) min = n;
    if (n > max) max = n;
  }
  const minSum = sum - max;
  const maxSum = sum - min;

  return `${minSum} ${maxSum}`;
}
