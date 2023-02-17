const without = function(sourceArray, itemsToRemove) {
  let newArray = [];
  for (const elements of sourceArray) {
    if (!itemsToRemove.includes(elements)) {
      newArray.push(elements);
    }
  }
  return newArray;
};


module.exports = without;