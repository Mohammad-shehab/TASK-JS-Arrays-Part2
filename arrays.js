/**
 * isArrayLengthOdd(numbers):
 * - receives array numbers
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> false
 */
function isArrayLengthOdd(numbers) {
  return numbers.length % 2 !== 0;
}

/**
 * isArrayLengthEven(numbers):
 * - receives array numbers
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
function isArrayLengthEven(numbers) {
  return numbers.length % 2 === 0;
}

/**
 * addLailaToArray(instructors):
 * - receives array instructors
 * - returns a new array that's a copy of array instructors with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */
function addLailaToArray(instructors) {

  let newIns = instructors;
  newIns.push("Laila")
  return newIns;
}


/**
 * eliminateTeam(teams):
 * - receives array teams
 * - removes the last element from the array and returns it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */
function eliminateTeam(teams) {
  return teams.pop();
}

/**
 * secondHalfOfArrayIfItIsEven(fruits):
 * - receives array fruits
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */
function secondHalfOfArrayIfItIsEven(fruits) {
  if (fruits.length % 2 === 0) {
    return fruits.slice(fruits.length / 2);
  } else {
    return [];
  }
}

/**
 * youGottaCalmDown(shout):
 * - receives a string shout
 * - returns the string shout with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Swift!!!!!!!!!!!") -> "Taylor Swift!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use string method .indexOf()
 * - Use string method .slice()
 */
function youGottaCalmDown(shout) {
  let exclamationIndex = shout.indexOf('!');
  if (exclamationIndex !== -1) {
    return shout.slice(0, exclamationIndex + 1);
  }
  return shout;
}

module.exports = {
  isArrayLengthOdd,
  isArrayLengthEven,
  addLailaToArray,
  eliminateTeam,
  secondHalfOfArrayIfItIsEven,
  youGottaCalmDown,
};
