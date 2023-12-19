const caesarCipher = require("../code/caesarcipher");

describe("encrypted the String ", () => {
  test("Key = 0", () => {
    expect(caesarCipher("hello", 0)).toEqual("hello");
  });

  test("Key less than 26", () => {
    expect(caesarCipher("hello", 15)).toEqual("wtaad");
  });

  test("Key is more than 26", () => {
    expect(caesarCipher("hello", 30)).toEqual("lipps");
  });

  test("Key contain punctuation", () => {
    expect(caesarCipher("he,llo,m,m", 15)).toEqual("wt,aad,b,b");
  });

  test("Negative key", () => {
    expect(caesarCipher("hello", -3)).toEqual("ebiil");
  });

  test("Negative key with less than 26", () => {
    expect(caesarCipher("hello", -29)).toEqual("ebiil");
  });
});
