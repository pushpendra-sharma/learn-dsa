/**
   #
  ##
 ###
####
https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true
 */

export function staircase(n) {
  let result = ``;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j < n - 1 - i) result += " ";
      else result += "#";
    }

    if (i < n - 1) result += "\n";
  }

  console.log(result);
  return result;
}
