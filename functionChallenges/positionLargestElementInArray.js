const assert = require('assert');

function positionLargestElementInArray(arr = []) {
	if(arr.length === 0)
		return undefined;
	let pos;
	let value;
	for(i = 0; i < arr.length; i++) {
		if(value === undefined || arr[i] > value) {
			value = arr[i];
			pos = i;
		}
	}
	return pos;
}

assert.equal(positionLargestElementInArray(), undefined);
assert.equal(positionLargestElementInArray([]), undefined);
assert.equal(positionLargestElementInArray(['1']), 0);
assert.equal(positionLargestElementInArray(['1', '2', '3']), 2);
console.log('all tests passed!');
