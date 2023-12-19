const analyzeArray = require("../code/analyzearray");
const sampleArray = [1, 8, 3, 4, 2, 6];
const empty = [];

describe("array return the object", () => {
  test("if array is empty", () => {
    expect(analyzeArray(empty)).toEqual({
      average: NaN,
      min: undefined,
      max: undefined,
      length: 0,
    });
  });
  test("simple array", () => {
    expect(analyzeArray(sampleArray)).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
  test("array with negative numbers", () => {
    const array = [-3, -1, 0, 2, 4];
    expect(analyzeArray(array)).toEqual({
      average: 0.4,
      min: -3,
      max: 4,
      length: 5,
    });
  });

  test("array with duplicate numbers", () => {
    const array = [1, 2, 3, 2, 4];
    expect(analyzeArray(array)).toEqual({
      average: 2.4,
      min: 1,
      max: 4,
      length: 5,
    });
  });
});
