const capitalize = require("../code/capitalize");

describe("Rerturn with first character capitalized.", function () {
  test('with one letter"', function () {
    expect(capitalize("h")).toEqual("H");
  });

  test('with mutiple letters"', function () {
    expect(capitalize("hELLO")).toEqual("HELLO");
  });

  test('with mutiple letters but only the first character capitalized"', function () {
    expect(capitalize("hello")).toEqual("Hello");
  });
});
