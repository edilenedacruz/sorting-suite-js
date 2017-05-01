const assert = require('chai').assert
const bubbleSort = require('../scripts/bubbleSort')

describe("bubbleSort", function(){
  it("can sort an array", function(){
    var input = ["d", "b", "a", "c"]
    assert.deepEqual(bubbleSort(input), ["a", "b", "c", "d"]);
  });
});
