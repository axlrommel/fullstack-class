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

const getStudentsFromGrade = (list, grade) => {
  return list === undefined ? undefined : list.filter(student => student.grade === grade)
}

assert.deepEqual(getStudentsFromGrade([], 10), []);
assert.deepEqual(getStudentsFromGrade([tom], 12), [tom]);
assert.deepEqual(getStudentsFromGrade([tom], 11), []);
assert.deepEqual(getStudentsFromGrade(students, 12), [tom, patty]);
console.log('all tests passed!');