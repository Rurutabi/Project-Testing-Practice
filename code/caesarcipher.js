const getshiftString = (originalAlphabet, key) => {
  if (key > 0) {
    return (
      originalAlphabet.slice(key, originalAlphabet.length) +
      originalAlphabet.slice(0, key)
    );
  }

  if (key < 0) {
    return (
      originalAlphabet.slice(key) +
      originalAlphabet.slice(0, originalAlphabet.length + key)
    );
  }
};

const caesarCipher = (someString, key) => {
  if (key % 26 === 0) return someString;
  key = key > 26 ? key % 26 : key;
  key = key < -26 ? key % 26 : key;

  const originalAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const shiftString = getshiftString(originalAlphabet, key);
  console.log(shiftString);
  let encryptedString = "";

  for (let i = 0; i < someString.length; i++) {
    if (originalAlphabet.indexOf(someString[i])) {
      let char = originalAlphabet.indexOf(someString[i]);
      let index = char;

      if (index !== -1) {
        encryptedString = encryptedString + shiftString[index];
      } else {
        // console.log(char);
        encryptedString += someString[i];
      }
    }
  }

  return encryptedString;
};

console.log(caesarCipher("hello", -28));

module.exports = caesarCipher;
