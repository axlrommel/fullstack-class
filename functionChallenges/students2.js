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

const getStudentsNotFromGrade = (list, grade) => {
  return list === undefined ? undefined : list.filter(student => student.grade !== grade)
}

assert.deepEqual(getStudentsNotFromGrade([], 10), []);
assert.deepEqual(getStudentsNotFromGrade([tom], 12), []);
assert.deepEqual(getStudentsNotFromGrade([tom], 11), [tom]);
assert.deepEqual(getStudentsNotFromGrade(students, 12), [peter]);
console.log('all tests passed!');