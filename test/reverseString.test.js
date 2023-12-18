const reverseString = require("../code/reverseString");

describe(" function that takes a string and returns it reversed.", () => {
  test("empty string", () => {
    expect(reverseString("")).toEqual("");
  });

  test("string with 1 letter", () => {
    expect(reverseString("a")).toEqual("a");
  });

  test("with two letters", () => {
    expect(reverseString("he")).toEqual("eh");
  });

  test("with mutiple letters", () => {
    expect(reverseString("HelloHello")).toEqual("olleHolleH");
  });

  test("with digit letters", () => {
    expect(reverseString("123abc123")).toEqual("321cba321");
  });

  test("with special characters", () => {
    expect(reverseString("!@#$")).toEqual("$#@!");
  });

  test("with spaces", () => {
    expect(reverseString("hello world")).toEqual("dlrow olleh");
  });

  test("with mixed upper and lower case", () => {
    expect(reverseString("AbCdEf")).toEqual("fEdCbA");
  });
});
