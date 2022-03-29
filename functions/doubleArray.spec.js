const doubleArray = require("./doubleArray");

describe("doubleArray", () => {
  it("should work with an empty array", () => {
    const arr = doubleArray([]);
    expect(arr).toEqual([]);
  });
  it("should work with one element", () => {
    const arr = doubleArray([2]);
    expect(arr).toEqual([4]);
  });
  it("should work with multiple elements", () => {
    const arr = doubleArray([2, 4]);
    expect(arr).toEqual([4, 8]);
  });
});
