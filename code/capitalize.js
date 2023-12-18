const capitalize = function (someString) {
  return someString[0].toUpperCase() + someString.slice(1, someString.length);
};

console.log(capitalize("hello"));

module.exports = capitalize;
