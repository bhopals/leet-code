/**
 * @param {number[]} arr
 * @return {number}
 */
// https://www.tutorialcup.com/interview/array/peak-index-in-a-mountain-array.htm
// USING FOR LOOP - Time complexity O(n)
var peakIndexInMountainArrayF = function (arr) {
  let idx = 0;
  let val = 0;
  for (let i = 0; i < arr.length; i++) {
    if (val < arr[i]) {
      idx = i;
      val = arr[i];
    }
  }
  return idx;
};

// USING FOR LOOP - Time complexity O(log n)
var peakIndexInMountainArrayB = function (arr) {
  let low = (middle = 0);
  let high = arr.length - 1;

  while (low < high) {
    middle = Math.floor((high + low) / 2);

    if (arr[middle] > arr[middle + 1]) {
      high = middle;
    } else {
      low = middle + 1;
    }
  }
  return low;
};

// 852. Peak Index in a Mountain Array
// Let's call an array arr a mountain if the following properties hold:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... arr[i-1] < arr[i]
// arr[i] > arr[i+1] > ... > arr[arr.length - 1]
// Given an integer array arr that is guaranteed to be a mountain, return any i such that arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

// Example 1:

// Input: arr = [0,1,0]
// Output: 1
// Example 2:

// Input: arr = [0,2,1,0]
// Output: 1
// Example 3:

// Input: arr = [0,10,5,2]
// Output: 1

// Constraints:

// 3 <= arr.length <= 104
// 0 <= arr[i] <= 106
// arr is guaranteed to be a mountain array.

// Follow up: Finding the O(n) is straightforward, could you find an O(log(n)) solution?

// **Algorithm
// Set low to 0.
// Set high to the length of array minus 1.
// Declare a variable mid.
// Set mid = low + ( high – low ) / 2.
// While low < high:
// If array[ mid ] > = array [ mid + 1].
// then high = mid.
// Else
// then low = mid + 1.
// Return low.
