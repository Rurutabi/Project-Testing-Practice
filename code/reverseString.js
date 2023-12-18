const reverseString = (someString) => {
  if (someString === "") return someString;

  return someString.split("").reduce((reversed, char) => char + reversed, "");
};

console.log(reverseString("123abc123"));

module.exports = reverseString;
