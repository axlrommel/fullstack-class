const assert = require('assert');

function addTwoNumbers(a = 0, b = 0) {
	return (a+b);
}

assert.equal(addTwoNumbers(), 0);
assert.equal(addTwoNumbers(3), 3);
assert.equal(addTwoNumbers(3, 4), 7);
console.log('all tests passed!');
