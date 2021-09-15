const assert = require('assert');

function firstElementInArray(arr = []) {
	return arr.length === 0 ? undefined : arr[0]
}

assert.equal(firstElementInArray(), undefined);
assert.equal(firstElementInArray([]), undefined);
assert.equal(firstElementInArray(['a']), 'a');
assert.equal(firstElementInArray(['a', 'b', 'c']), 'a');
console.log('all tests passed!');
