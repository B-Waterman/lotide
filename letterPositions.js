const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.toLowerCase();
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter !== " " && letter !== "'") {
      if (!results[letter]) { //If key doesn't exists for letter yet...
        results[letter] = [i]; //Push index value to key
      } else {
        results[letter].push(i); //Create key & assign first appearance index value
      }
    }
  }
  return results;
};

module.exports = letterPositions;