/**
 * arrayMethods.js
 * This script provides explanations and examples for common JavaScript array methods.
 * It's designed to be a helpful guide for understanding how to manipulate arrays effectively.
 */

// --- Introduction ---
console.log("--- Understanding JavaScript Array Methods ---");
console.log(
  "Arrays are fundamental in JavaScript for storing collections of data.",
);
console.log(
  "JavaScript provides a rich set of built-in methods to perform various operations on arrays.",
);
console.log("Let's explore some of the most commonly used ones:\n");

// --- Original Array for Examples ---
const numbers = [1, 2, 3, 4, 5];
const fruits = ["apple", "banana", "cherry"];
const mixedArray = [10, "hello", true, null, undefined, { id: 1 }, [1, 2]];
const nestedNumbers = [
  [1, 2],
  [3, 4],
  [5, 6],
];

console.log(`Original numbers array: ${JSON.stringify(numbers)}`);
console.log(`Original fruits array: ${JSON.stringify(fruits)}\n`);

// --------------------------------------------------------------------------------
// --- Iteration Methods ---
// --------------------------------------------------------------------------------

// 1. Array.prototype.forEach()
console.log("1. Array.prototype.forEach()");
console.log(
  "   Purpose: Executes a provided function once for each array element.",
);
console.log("   Returns: undefined.");
console.log(
  "   Note: It does not create a new array or modify the original array (unless explicitly done inside the callback).",
);
console.log("   Example:");
let sum = 0;
numbers.forEach((number, index) => {
  sum += number;
  console.log(`     Element at index ${index}: ${number}`);
});
console.log(`   Sum using forEach: ${sum}\n`);

// 2. Array.prototype.map()
console.log("2. Array.prototype.map()");
console.log(
  "   Purpose: Creates a new array populated with the results of calling a provided function on every element in the calling array.",
);
console.log("   Returns: A new array with the same length as the original.");
console.log("   Example:");
const doubledNumbers = numbers.map((number) => number * 2);
console.log(`   Original numbers: ${JSON.stringify(numbers)}`);
console.log(`   Doubled numbers (map): ${JSON.stringify(doubledNumbers)}\n`);

// 3. Array.prototype.filter()
console.log("3. Array.prototype.filter()");
console.log(
  "   Purpose: Creates a new array with all elements that pass the test implemented by the provided function.",
);
console.log(
  "   Returns: A new array containing only the elements for which the callback function returns a truthy value.",
);
console.log("   Example:");
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(`   Original numbers: ${JSON.stringify(numbers)}`);
console.log(`   Even numbers (filter): ${JSON.stringify(evenNumbers)}\n`);

// 4. Array.prototype.reduce()
console.log("4. Array.prototype.reduce()");
console.log(
  "   Purpose: Executes a 'reducer' callback function on each element of the array, resulting in a single output value.",
);
console.log("   Returns: The single value that results from the reduction.");
console.log("   Example (sum):");
const sumOfNumbers = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
console.log(`   Original numbers: ${JSON.stringify(numbers)}`);
console.log(`   Sum of numbers (reduce): ${sumOfNumbers}`);
console.log("   Example (max value):");
const maxNumber = numbers.reduce(
  (max, current) => (current > max ? current : max),
  numbers[0],
);
console.log(`   Max number (reduce): ${maxNumber}\n`);

// --------------------------------------------------------------------------------
// --- Search and Test Methods ---
// --------------------------------------------------------------------------------

// 5. Array.prototype.find()
console.log("5. Array.prototype.find()");
console.log(
  "   Purpose: Returns the value of the first element in the array that satisfies the provided testing function.",
);
console.log(
  "   Returns: The value of the first element that passes the test, otherwise undefined.",
);
console.log("   Example:");
const foundNumber = numbers.find((number) => number > 3);
console.log(`   Original numbers: ${JSON.stringify(numbers)}`);
console.log(`   First number greater than 3 (find): ${foundNumber}\n`);

// 6. Array.prototype.findIndex()
console.log("6. Array.prototype.findIndex()");
console.log(
  "   Purpose: Returns the index of the first element in the array that satisfies the provided testing function.",
);
console.log(
  "   Returns: The index of the first element that passes the test, otherwise -1.",
);
console.log("   Example:");
const foundIndex = numbers.findIndex((number) => number === 4);
console.log(`   Original numbers: ${JSON.stringify(numbers)}`);
console.log(`   Index of number 4 (findIndex): ${foundIndex}\n`);

// 7. Array.prototype.includes()
console.log("7. Array.prototype.includes()");
console.log(
  "   Purpose: Determines whether an array includes a certain value among its entries.",
);
console.log("   Returns: true or false.");
console.log("   Example:");
const hasThree = numbers.includes(3);
const hasTen = numbers.includes(10);
console.log(`   Original numbers: ${JSON.stringify(numbers)}`);
console.log(`   Does array include 3? ${hasThree}`);
console.log(`   Does array include 10? ${hasTen}\n`);

// 8. Array.prototype.some()
console.log("8. Array.prototype.some()");
console.log(
  "   Purpose: Tests whether at least one element in the array passes the test implemented by the provided function.",
);
console.log(
  "   Returns: true if the callback function returns a truthy value for at least one element, otherwise false.",
);
console.log("   Example:");
const hasLargeNumber = numbers.some((number) => number > 4);
const hasNegativeNumber = numbers.some((number) => number < 0);
console.log(`   Original numbers: ${JSON.stringify(numbers)}`);
console.log(`   Are some numbers greater than 4? ${hasLargeNumber}`);
console.log(`   Are some numbers negative? ${hasNegativeNumber}\n`);

// 9. Array.prototype.every()
console.log("9. Array.prototype.every()");
console.log(
  "   Purpose: Tests whether all elements in the array pass the test implemented by the provided function.",
);
console.log(
  "   Returns: true if the callback function returns a truthy value for every element, otherwise false.",
);
console.log("   Example:");
const allGreaterThanZero = numbers.every((number) => number > 0);
const allGreaterThanThree = numbers.every((number) => number > 3);
console.log(`   Original numbers: ${JSON.stringify(numbers)}`);
console.log(`   Are all numbers greater than 0? ${allGreaterThanZero}`);
console.log(`   Are all numbers greater than 3? ${allGreaterThanThree}\n`);

// --------------------------------------------------------------------------------
// --- Modifying Array Methods (Mutators) ---
// These methods modify the original array.
// --------------------------------------------------------------------------------

// 10. Array.prototype.push()
console.log("10. Array.prototype.push()");
console.log("    Purpose: Adds one or more elements to the end of an array.");
console.log("    Returns: The new length of the array.");
console.log("    Example:");
const mutableFruitsPush = ["apple", "banana"];
console.log(`    Before push: ${JSON.stringify(mutableFruitsPush)}`);
const newLengthPush = mutableFruitsPush.push("cherry", "date");
console.log(
  `    After push: ${JSON.stringify(mutableFruitsPush)} (New length: ${newLengthPush})\n`,
);

// 11. Array.prototype.pop()
console.log("11. Array.prototype.pop()");
console.log("    Purpose: Removes the last element from an array.");
console.log("    Returns: The removed element.");
console.log("    Example:");
const mutableFruitsPop = ["apple", "banana", "cherry"];
console.log(`    Before pop: ${JSON.stringify(mutableFruitsPop)}`);
const poppedFruit = mutableFruitsPop.pop();
console.log(
  `    After pop: ${JSON.stringify(mutableFruitsPop)} (Removed: ${poppedFruit})\n`,
);

// 12. Array.prototype.shift()
console.log("12. Array.prototype.shift()");
console.log("    Purpose: Removes the first element from an array.");
console.log("    Returns: The removed element.");
console.log("    Example:");
const mutableFruitsShift = ["apple", "banana", "cherry"];
console.log(`    Before shift: ${JSON.stringify(mutableFruitsShift)}`);
const shiftedFruit = mutableFruitsShift.shift();
console.log(
  `    After shift: ${JSON.stringify(mutableFruitsShift)} (Removed: ${shiftedFruit})\n`,
);

// 13. Array.prototype.unshift()
console.log("13. Array.prototype.unshift()");
console.log(
  "    Purpose: Adds one or more elements to the beginning of an array.",
);
console.log("    Returns: The new length of the array.");
console.log("    Example:");
const mutableFruitsUnshift = ["banana", "cherry"];
console.log(`    Before unshift: ${JSON.stringify(mutableFruitsUnshift)}`);
const newLengthUnshift = mutableFruitsUnshift.unshift("apple", "grape");
console.log(
  `    After unshift: ${JSON.stringify(mutableFruitsUnshift)} (New length: ${newLengthUnshift})\n`,
);

// 14. Array.prototype.splice()
console.log("14. Array.prototype.splice()");
console.log(
  "    Purpose: Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.",
);
console.log("    Returns: An array containing the deleted elements (if any).");
console.log("    Parameters: `start`, `deleteCount`, `item1`, `item2`, ...");
console.log("    Example (remove 2 elements from index 1):");
const mutableArraySplice1 = [1, 2, 3, 4, 5];
console.log(`    Original: ${JSON.stringify(mutableArraySplice1)}`);
const removedElements1 = mutableArraySplice1.splice(1, 2); // Removes 2, 3
console.log(
  `    After splice (remove): ${JSON.stringify(mutableArraySplice1)} (Removed: ${JSON.stringify(removedElements1)})`,
);
console.log("    Example (remove 1 element from index 2 and add 'X', 'Y'):");
const mutableArraySplice2 = ["a", "b", "c", "d"];
console.log(`    Original: ${JSON.stringify(mutableArraySplice2)}`);
const removedElements2 = mutableArraySplice2.splice(2, 1, "X", "Y"); // Removes 'c', adds 'X', 'Y'
console.log(
  `    After splice (replace): ${JSON.stringify(mutableArraySplice2)} (Removed: ${JSON.stringify(removedElements2)})`,
);
console.log("    Example (add 'Z' at index 1 without removing):");
const mutableArraySplice3 = [10, 20, 30];
console.log(`    Original: ${JSON.stringify(mutableArraySplice3)}`);
const removedElements3 = mutableArraySplice3.splice(1, 0, "Z"); // Adds 'Z' at index 1
console.log(
  `    After splice (add): ${JSON.stringify(mutableArraySplice3)} (Removed: ${JSON.stringify(removedElements3)})\n`,
);

// 15. Array.prototype.sort()
console.log("15. Array.prototype.sort()");
console.log(
  "    Purpose: Sorts the elements of an array in place and returns the reference to the same array.",
);
console.log("    Returns: The sorted array (modified in place).");
console.log(
  "    Note: Default sort is lexicographical (string comparison). Provide a compare function for numeric sorts.",
);
console.log("    Example (string sort):");
const sortFruits = ["banana", "apple", "cherry"];
console.log(`    Before sort: ${JSON.stringify(sortFruits)}`);
sortFruits.sort();
console.log(`    After sort (string): ${JSON.stringify(sortFruits)}`);
console.log("    Example (numeric sort):");
const sortNumbers = [3, 1, 4, 1, 5, 9, 2];
console.log(`    Before sort: ${JSON.stringify(sortNumbers)}`);
sortNumbers.sort((a, b) => a - b); // Ascending
console.log(
  `    After sort (numeric ascending): ${JSON.stringify(sortNumbers)}`,
);
sortNumbers.sort((a, b) => b - a); // Descending
console.log(
  `    After sort (numeric descending): ${JSON.stringify(sortNumbers)}\n`,
);

// 16. Array.prototype.reverse()
console.log("16. Array.prototype.reverse()");
console.log("    Purpose: Reverses an array in place.");
console.log("    Returns: The reversed array (modified in place).");
console.log("    Example:");
const reverseArray = [1, 2, 3, 4, 5];
console.log(`    Before reverse: ${JSON.stringify(reverseArray)}`);
reverseArray.reverse();
console.log(`    After reverse: ${JSON.stringify(reverseArray)}\n`);

// --------------------------------------------------------------------------------
// --- Non-Modifying Array Methods (Accessors/Creators) ---
// These methods do not modify the original array.
// --------------------------------------------------------------------------------

// 17. Array.prototype.slice()
console.log("17. Array.prototype.slice()");
console.log(
  "    Purpose: Returns a shallow copy of a portion of an array into a new array object selected from `start` to `end` (end not included).",
);
console.log("    Returns: A new array.");
console.log("    Example:");
const originalSlice = [10, 20, 30, 40, 50];
console.log(`    Original: ${JSON.stringify(originalSlice)}`);
const slicedPart = originalSlice.slice(1, 4); // Elements from index 1 up to (but not including) index 4
const slicedFromStart = originalSlice.slice(2); // Elements from index 2 to the end
const slicedCopy = originalSlice.slice(); // Creates a shallow copy of the entire array
console.log(`    Sliced from index 1 to 4: ${JSON.stringify(slicedPart)}`);
console.log(
  `    Sliced from index 2 to end: ${JSON.stringify(slicedFromStart)}`,
);
console.log(`    Shallow copy (slice()): ${JSON.stringify(slicedCopy)}`);
console.log(`    Original array remains: ${JSON.stringify(originalSlice)}\n`);

// 18. Array.prototype.concat()
console.log("18. Array.prototype.concat()");
console.log("    Purpose: Used to merge two or more arrays.");
console.log("    Returns: A new array.");
console.log("    Example:");
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];
const combinedArray = arr1.concat(arr2, arr3);
console.log(
  `    Arr1: ${JSON.stringify(arr1)}, Arr2: ${JSON.stringify(arr2)}, Arr3: ${JSON.stringify(arr3)}`,
);
console.log(`    Combined array (concat): ${JSON.stringify(combinedArray)}`);
console.log(`    Originals remain unchanged: ${JSON.stringify(arr1)}\n`);

// 19. Array.prototype.join()
console.log("19. Array.prototype.join()");
console.log(
  "    Purpose: Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.",
);
console.log("    Returns: A string.");
console.log("    Example:");
const elements = ["fire", "water", "air"];
const joinedDefault = elements.join();
const joinedWithDash = elements.join("-");
const joinedWithSpace = elements.join(" ");
console.log(`    Original elements: ${JSON.stringify(elements)}`);
console.log(`    Joined (default): '${joinedDefault}'`);
console.log(`    Joined with '-': '${joinedWithDash}'`);
console.log(`    Joined with ' ': '${joinedWithSpace}'\n`);

// 20. Array.prototype.indexOf()
console.log("20. Array.prototype.indexOf()");
console.log(
  "    Purpose: Returns the first index at which a given element can be found in the array.",
);
console.log(
  "    Returns: The first index of the element, or -1 if it is not present.",
);
console.log("    Example:");
const searchArray = ["apple", "banana", "cherry", "apple"];
const firstAppleIndex = searchArray.indexOf("apple");
const bananaIndex = searchArray.indexOf("banana");
const grapeIndex = searchArray.indexOf("grape");
console.log(`    Search array: ${JSON.stringify(searchArray)}`);
console.log(`    First 'apple' is at index: ${firstAppleIndex}`);
console.log(`    'banana' is at index: ${bananaIndex}`);
console.log(`    'grape' is at index: ${grapeIndex}\n`);

// 21. Array.prototype.lastIndexOf()
console.log("21. Array.prototype.lastIndexOf()");
console.log(
  "    Purpose: Returns the last index at which a given element can be found in the array.",
);
console.log(
  "    Returns: The last index of the element, or -1 if it is not present.",
);
console.log("    Example:");
const searchArray2 = ["apple", "banana", "cherry", "apple"];
const lastAppleIndex = searchArray2.lastIndexOf("apple");
const bananaIndex2 = searchArray2.lastIndexOf("banana");
console.log(`    Search array: ${JSON.stringify(searchArray2)}`);
console.log(`    Last 'apple' is at index: ${lastAppleIndex}`);
console.log(`    'banana' is at index: ${bananaIndex2}\n`);

// 22. Array.prototype.flat()
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

// 23. Array.prototype.flatMap()
console.log("23. Array.prototype.flatMap()");
console.log(
  "    Purpose: First maps each element using a mapping function, then flattens the result into a new array. It is identical to a `map()` followed by a `flat()` of depth 1.",
);
console.log("    Returns: A new array.");
console.log("    Example:");
const words = ["hello world", "goodbye cruel world"];
const letters = words.flatMap((word) => word.split(""));
console.log(`    Original words: ${JSON.stringify(words)}`);
console.log(`    FlatMapped letters: ${JSON.stringify(letters)}\n`);

// --- Conclusion ---
console.log("--- Conclusion ---");
console.log(
  "These are some of the most frequently used array methods in JavaScript.",
);
console.log(
  "Understanding when to use mutating vs. non-mutating methods is crucial for predictable code behavior.",
);
console.log("Practice using them to become proficient in array manipulation!");
