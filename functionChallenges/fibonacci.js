const assert = require('assert');

function fibonacci(a) {
  let a0 = 0;
  let a1 = 1;
  if (a === 0)
    return a0;
  if (a === 1)
    return a1;
  for (let i = 2; i < a; i++) {
    const oldA0 = a0;
    a0 = a1
    a1 = oldA0 + a1
  }
  return a0 + a1;
}

assert.equal(fibonacci(0), 0);
assert.equal(fibonacci(1), 1);
assert.equal(fibonacci(2), 1);
assert.equal(fibonacci(3), 2);
assert.equal(fibonacci(4), 3);
assert.equal(fibonacci(5), 5);
assert.equal(fibonacci(6), 8);
assert.equal(fibonacci(17), 1597);
console.log('all tests passed!');