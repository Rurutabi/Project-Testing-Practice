const { capitalize } = require("../code/capitalize");

it("work", () => {
  const result = capitalize("hello");
  expect(result).toBe("hello");
});
