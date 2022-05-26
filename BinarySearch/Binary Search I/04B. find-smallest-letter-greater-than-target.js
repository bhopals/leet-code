/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  console.log(`>>letters: [${letters}], target: ${target}`);
  let low = 0;
  let high = letters.length;
  let mid = 0;

  while (low < high) {
    mid = Math.floor((low + high) / 2);
    console.log(`>>>high:${high}, low: ${low},== mid: ${mid}, `);

    console.log(
      `>>letters[mid]:${letters[mid]}, target: ${target}, cond:${
        letters[mid] > target
      }`
    );
    if (letters[mid] > target) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  console.log(`>>>low: ${low} >>>low % letters.length:${low % letters.length}`);
  return letters[low % letters.length];
};

var nextGreatestLetterB = function (letters, target) {
  let low = (mid = 0);
  let high = letters.length;

  while (low < high) {
    mid = Math.floor((high + low) / 2);

    if (letters[mid] > target) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return letters[low % letters.length];
};

var nextGreatestLetterA = function (letters, target) {
  if (target === "z") return letters[0];
  let selected = letters[0];

  for (let i = 0; i < letters.length; i++) {
    console.log(
      `>>letters[i][${letters[i]}], target: ${target}, cond:${
        letters[i] > target
      }`
    );
    if (letters[i] > target) {
      selected = letters[i];
      console.log(`>>>selected:${selected}`);

      break;
    }
  }
  return selected;
};

console.log("a>>", nextGreatestLetter(["a", "b"], "z"));
console.log("------------------");

console.log("c>>", nextGreatestLetter(["c", "f", "j"], "a"));
console.log("------------------");

console.log("f>>", nextGreatestLetter(["c", "f", "j"], "c"));
console.log("------------------");

console.log("f>>", nextGreatestLetter(["c", "f", "j"], "d"));
console.log("------------------");

console.log("c>>", nextGreatestLetter(["c", "f", "j"], "z"));
console.log("------------------");
