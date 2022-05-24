/** USING FOR LOOP - BRUTE FORCE
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    console.log("i:", i);
    console.log(`i:${i}, target: ${target}, nums[i]: ${nums[i]}`);
    if (target <= nums[i]) {
      console.log("inside>>>");
      return i;
    }
  }
  return len;
};

/** USING BINARY SEARCH -
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsertB = function (nums, target) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    console.log("i:", i);
    if (target <= nums[i]) {
      return i;
    }
  }
  return len;
};

console.log(searchInsert([1, 3, 5, 8], 0));
console.log(searchInsert([1, 3, 5, 8], 3));
console.log(searchInsert([1, 3, 5, 8], 7));
console.log(searchInsert([1, 3, 5, 8], 9));

// 35. Search Insert Position

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104
