const assert = require('assert');

function largestNumberInArray(arr = []) {
	let maxValue = undefined;
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] > maxValue || i === 0)
			maxValue = arr[i];
	}
	return maxValue;
}

assert.equal(largestNumberInArray(), undefined);
assert.equal(largestNumberInArray([]), undefined);
assert.equal(largestNumberInArray([1]), 1);
assert.equal(largestNumberInArray([1, -2, 3]), 3);
assert.equal(largestNumberInArray([1, 4, 4, 3]), 4);
console.log('all tests passed!');
