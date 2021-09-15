const assert = require('assert');

function averageValueInNumberArray (arr = []) {
	if(arr.length === 0)
		return undefined;
	let sum = 0;
	for(let i = 0; i < arr.length; i++) {
		sum = sum + arr[i]
	}
	return (sum/arr.length);
}

assert.equal(averageValueInNumberArray(), undefined);
assert.equal(averageValueInNumberArray([]), undefined);
assert.equal(averageValueInNumberArray([4]), 4);
assert.equal(averageValueInNumberArray([1, 3, 5]), 3);
console.log('all tests passed!');
