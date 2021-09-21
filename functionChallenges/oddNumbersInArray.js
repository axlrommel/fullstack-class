const assert = require('assert');

function oddNumbersinArray (arr) {
  if(arr === undefined)
    return undefined;
	let odds = [];
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] % 2 === 1) {
      odds.push(arr[i]);
    }
	}
	return odds;
}

assert.deepEqual(oddNumbersinArray(), undefined);
assert.deepEqual(oddNumbersinArray([]), []); 
assert.deepEqual(oddNumbersinArray([3]), [3]);
assert.deepEqual(oddNumbersinArray([1, 3, 5]), [1, 3, 5]);
assert.deepEqual(oddNumbersinArray([1, 2, 5]), [1, 5]);
console.log('all tests passed!');
