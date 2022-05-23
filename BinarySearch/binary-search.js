const array = [
  2, 25, 36, 58, 68, 96, 125, 136, 145, 152, 168, 220, 250, 300, 450, 500,
];

const binarySearch = (array, value) => {
  // Init Low and Mid to ZERO (0)
  let mid = (low = 0);
  // Init Hight to Array's Length
  let high = array.length - 1;

  // Iterate over till LOW is Less than HIGH
  while (low <= high) {
    // Calculate MIDDLE
    mid = Math.floor((high + low) / 2);
    // MIDDLE = value being searched = VALUE FOUND!
    if (array[mid] == value) {
      return array[mid];
    } else if (array[mid] > value) {
      // VALUE is LESS than MIDDLE means move the HIGH to MID -1
      high = mid - 1;
    } else {
      // VALUE is GREATER than MIDDLE means move the LOW to MID + 1
      low = mid + 1;
    }
  }
  return -1;
};

console.log(binarySearch(array, 55));
console.log(binarySearch(array, 500));
