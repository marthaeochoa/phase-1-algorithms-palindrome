// function isPalindrome(word) {
   // Write your algorithm here
//   word.toLowerCase()
//   const len = word.length;

//   for (let i = 0; i < len / 2; i++) {

//     if (word[i] !== word[len - 1 - i]) {
//         return false;
//     }
//   }
//   return true
// }

function reverse(word){
  const wordToArray = word.split("");
  const arrayReverse = wordToArray.reverse();
  const arrayToWord = arrayReverse.join("");
  return arrayToWord
}

function isPalindrome(word){
  // Write your algorithm here
  const reversedWord = reverse(word)

  if(word === reversedWord){
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
  need to make the word all lowercase .toLowerCase()
  must return boolean

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
