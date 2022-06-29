/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = (mid = 0);
  let right = x > 2 ? Math.floor(x / 2) + 1 : x + 1;

  while (left < right) {
    mid = Math.floor((left + right) / 2);
    const sq0 = mid * mid;
    if (sq0 > x) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left - 1;
};

console.log("16=== 4 >>", mySqrt(16));
// console.log("12=== 3 >>", mySqrt(12));
// console.log("8=== 2 >>", mySqrt(8));
// console.log("4=== 2 >>", mySqrt(4));
// console.log("3=== 1 >>", mySqrt(3));
// console.log("1=== 1 >>", mySqrt(1));
// console.log("0=== 0 >>", mySqrt(0));
