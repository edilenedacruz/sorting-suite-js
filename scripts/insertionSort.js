var input = ["d", "b", "a", "c"];
var input2 = [ 5, 50, 25, 500, 15, 750];

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

insertionSort(input);
console.log(input);

insertionSort(input2);
console.log(input2);
