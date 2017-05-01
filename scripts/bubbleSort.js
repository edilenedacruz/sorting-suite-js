var input = ["d", "b", "a", "c"];
var input2 = [ 5, 50, 25, 500, 15, 750];

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
      }
    }
  }
}


bubbleSort(input);
console.log(input);

bubbleSort(input2);
console.log(input2);
