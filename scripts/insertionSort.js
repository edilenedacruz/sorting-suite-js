function insertionSort(input) {
  for(var i = 1; i < input.length; i++) {
    var temp = input[i];
    for(var j = i - 1; j >= 0 && input[j] > temp; j--) {
      input[j+1] = input[j];
    }
    input[j+1] = temp;
  }
  return input;
}

module.exports = insertionSort
