/**
 * @param {number} num
 * @return {boolean}
 */
// Binary Search - - Time complexity - o( log n) - BEST
var isPerfectSquare = function (num) {
  let left = (mid = sqr = 0);
  let right = num;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    sqr = mid * mid;

    if (sqr === num) {
      return true;
    } else if (sqr > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};

/**
 * @param {number} num
 * @return {boolean}
 */
// Loop - Brute Force - Time complexity - o(n)
var isPerfectSquare = function (num) {
  for (let i = 0; i * i >= 0 && i * i <= num; i++) {
    if (i * i == num) {
      return true;
    }
  }
  return false;
};

// 367. Valid Perfect Square

// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Follow up: Do not use any built-in library function such as sqrt.

// Example 1:

// Input: num = 16
// Output: true
// Example 2:

// Input: num = 14
// Output: false

// Constraints:

// 1 <= num <= 2^31 - 1
