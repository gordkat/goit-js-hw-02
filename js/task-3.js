const findLongestWord = function (string) {
  const stringArr = string.split(' ');
  let longestWord = stringArr[0];
  for (let i = 1; i < stringArr.length; i += 1) {
    if (stringArr[i].length > longestWord.length) {
      longestWord = stringArr[i];
    }
  }
  return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
