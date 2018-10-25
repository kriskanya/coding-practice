// https://techdevguide.withgoogle.com/paths/foundational/find-longest-word-in-dictionary-that-subsequence-of-given-string/#!
// Given a string S and a set of words D, find the longest word in D that is a subsequence of // S.

// For example, given the input of S = "abppplee" and D = {"able", "ale", "apple", "bale", "kangaroo"} the correct output would be "apple"
S = 'abppplee';
D = ["able", "ale", "apple", "bale", "kangaroo"];

function go() {
  const array = sortArray();
  return findSubsequence(array);
}

function findSubsequence(array) {
  let found;
  for (let i = 0; i < array.length; i++) {
    let Sindex = 0;
    for (let j = 0; j < array[i].length; j++) {
      const strToCheck = S.substr(Sindex, S.length - 1);
      Sindex = strToCheck.indexOf(array[i][j]);
      found = true;
      if (Sindex === -1) {
        found = false;
        break;
      }
    }
    if (found) {
      return array[i];
    }
  }
}

function sortArray() {
  return D.sort((a,b) => {
    return b.length - a.length;
  });
}

console.log(go());
