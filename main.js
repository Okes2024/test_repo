// https://github.com/Okes2024/test_repo.git
console.log("22. Array.prototype.flat()");
console.log(
  "    Purpose: Creates a new array with all sub-array elements recursively concatenated to a specified depth.",
);
console.log("    Returns: A new array with the sub-array elements flattened.");
console.log("    Example:");
const multiDimArray = [1, [2, 3], [4, [5, 6]]];
console.log(
  `    Original multi-dimensional array: ${JSON.stringify(multiDimArray)}`,
);
const flatOnce = multiDimArray.flat();
const flatTwice = multiDimArray.flat(2); // Flatten to depth 2
const flatAll = multiDimArray.flat(Infinity); // Flatten all nested arrays
console.log(`    Flattened once: ${JSON.stringify(flatOnce)}`);
console.log(`    Flattened twice: ${JSON.stringify(flatTwice)}`);
console.log(
  `    Flattened completely (Infinity): ${JSON.stringify(flatAll)}\n`,
);
