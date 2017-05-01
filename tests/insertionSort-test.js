const assert = require('chai').assert
const insertionSort = require('../scripts/insertionSort')

describe("insertionSort", function(){
  it("can sort an array", function(){
    var input = [5, 50, 25, 500, 15, 750]
    assert.deepEqual(insertionSort(input),[5, 15, 25, 50, 500, 750]);
  });
});
