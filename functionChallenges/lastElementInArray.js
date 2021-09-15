const assert = require('assert');

function lastElementInArray(arr = []) {
	return arr.length > 0 ? arr[arr.length -1] : undefined;
}

assert.equal(lastElementInArray(), undefined);
assert.equal(lastElementInArray([]), undefined);
assert.equal(lastElementInArray(['1']), '1');
assert.equal(lastElementInArray(['1', '2', '3']), '3');
console.log('all tests passed!');
