const assert = require('assert');

const tom = {
  name: 'Tom',
  grade: 12
}

const peter = {
  name: 'Peter',
  grade: 11
}

const patty = {
  name: 'Patty',
  grade: 12
}

const students = [tom, peter, patty];

const getTwelveGrade = (arr) => {
return arr === undefined ? undefined : arr.filter(student => student.grade === 12)
}

assert.deepEqual(getTwelveGrade(), undefined);
assert.deepEqual(getTwelveGrade([]), []); 
assert.deepEqual(getTwelveGrade([tom]), [tom]);
assert.deepEqual(getTwelveGrade([peter]), []);
assert.deepEqual(getTwelveGrade(students), [tom, patty]);
console.log('all tests passed!');