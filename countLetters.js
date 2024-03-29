const countLetters = function(string) {
  let letterTally = {};
  string = string.toLowerCase();
  for (let letter of string) {
    if (letter !== " " && letter !== "'") {
      if (letterTally[letter]) { //If string contains a given letter...
        letterTally[letter] += 1; //Add one to existing key's value, OR
      } else {
        letterTally[letter] = 1; //Create key & assign starting value (tally) of 1
      }
    }
  }
  return letterTally;
};

module.exports = countLetters;