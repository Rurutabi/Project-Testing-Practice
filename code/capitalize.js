const capitalize = function (someString) {
  if (someString === "") return someString;

  if (someString[0] >= "0" && someString[0] <= "9") return someString;

  return someString[0].toUpperCase() + someString.slice(1, someString.length);
};

module.exports = capitalize;
