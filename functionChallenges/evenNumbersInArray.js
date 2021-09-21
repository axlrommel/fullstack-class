const assert = require('assert');

function evenNumbersinArray (arr) {
  if(arr === undefined)
    return undefined;
	let evens = [];
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] % 2 === 0) {
      evens.push(arr[i]);
    }
	}
	return evens;
}

assert.deepEqual(evenNumbersinArray(), undefined);
assert.deepEqual(evenNumbersinArray([]), []); 
assert.deepEqual(evenNumbersinArray([4]), [4]);
assert.deepEqual(evenNumbersinArray([1, 3, 5]), []);
assert.deepEqual(evenNumbersinArray([1, 2, 5]), [2]);
console.log('all tests passed!');
