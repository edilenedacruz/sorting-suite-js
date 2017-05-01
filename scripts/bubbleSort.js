function bubbleSort (input) {
  var swapped = true;
  while(swapped) {
    swapped = false;
  for (var i = 0; i < input.length - 1; i++) {
    if (input[i] > input[i + 1]) {
        var temp = input[i];
        input[i] = input[i+1];
        input[i+1] = temp;
        swapped = true;
      };
    };
  };
  return input;
};

module.exports = bubbleSort
