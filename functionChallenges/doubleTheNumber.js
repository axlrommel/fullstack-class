const assert = require('assert');

function doubleTheNumber (arr) {
  return arr === undefined ? undefined : arr.map(i => i * 2);
}

assert.deepEqual(doubleTheNumber(), undefined);
assert.deepEqual(doubleTheNumber([]), []); 
assert.deepEqual(doubleTheNumber([4]), [8]);
assert.deepEqual(doubleTheNumber([1, 3, 5]), [2, 6, 10]);
assert.deepEqual(doubleTheNumber([1, 2, 5]), [2, 4, 10]);
console.log('all tests passed!');
