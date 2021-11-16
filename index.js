function isPalindrome(word) {

  for(let i = 0; i < word.length / 2; i++){
    const j = word.length - 1 - i;
  
    if (word[i] !== word[j]) return false;
  }

  return true;
}

/* 

r a c e c a r 
0 1 2 3 4 5 6 
i           j

r a c e c a r 
0 1 2 3 4 5 6 
  i       j

r a c e c a r 
0 1 2 3 4 5 6 
  i       j

r a c e c a r 
0 1 2 3 4 5 6 
    i   j

r a c e c a r 
0 1 2 3 4 5 6 
      ij

iterate from the beginning to the middle of the word
  check each letter to the corresponding letter from the end
    if any letters don't match, return false

return true


*/

/*
  Add written explanation of your solution here
*/

/*
Make a function that returns true if a word is a palindrome.
That means if the first letter is the same as the last letter,
and the second letter is the same as the second to last letter, etc.,
until we reach the middle, returns true;
*/

/*
abba
^  ^
 ^^
true

robot
^   ^
false

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
