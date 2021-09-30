const assert = require('assert');

function revertString(str) {
  if (str === undefined) 
    return undefined;
  const arr = str.split('');
  let strOut = []
  for (i = arr.length; i >= 0; i--) {
    strOut.push(arr[i])
  }
  return strOut.join('')
}

assert.equal(revertString(), undefined);
assert.equal(revertString("a"), "a");
assert.equal(revertString("abc"), "cba");
console.log('all tests passed!');
