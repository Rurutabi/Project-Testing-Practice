const capitalize = require("../code/capitalize");

describe("Rerturn with first character capitalized.", function () {
  test('with an empty string"', function () {
    expect(capitalize("")).toEqual("");
  });

  test('with one letter"', function () {
    expect(capitalize("h")).toEqual("H");
  });

  test('with mutiple letters"', function () {
    expect(capitalize("hELLO")).toEqual("HELLO");
  });

  test('with mutiple letters but only the first character capitalized"', function () {
    expect(capitalize("hello")).toEqual("Hello");
  });

  test('with a string starting with a non-alphabetic character"', function () {
    expect(capitalize("123abc")).toEqual("123abc");
  });
});
