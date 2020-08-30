// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let newStringA = stringA.replace(/[^\w]/g, "").toLowerCase().split("").sort();
  let newStringB = stringB.replace(/[^\w]/g, "").toLowerCase().split("").sort();
  if (newStringA.length != newStringB.length) {
    console.log("1");
    return false;
  } else {
    for (let i = 0; i < newStringA.length; i++) {
      console.log(newStringA[i] + "," + newStringB[i]);
      if (newStringA[i] != newStringB[i]) {
        return false;
      }
    }
    return true;
  }
}

module.exports = anagrams;
