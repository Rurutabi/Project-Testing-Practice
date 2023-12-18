const getshiftString = (originalAlphabet, key) => {
  key = key > 26 ? key % 26 : key;

  return (
    originalAlphabet.slice(key, originalAlphabet.length) +
    originalAlphabet.slice(0, key)
  );
};

const caesarCipher = (someString, key) => {
  const originalAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const shiftString = getshiftString(originalAlphabet, key);

  let encryptedString = "";

  for (let i = 0; i < someString.length; i++) {
    if (originalAlphabet.indexOf(someString[i])) {
      let char = originalAlphabet.indexOf(someString[i]);
      let index = char;

      if (index !== -1) {
        encryptedString = encryptedString + shiftString[index];
      } else {
        encryptedString += char;
      }
    }
  }

  return encryptedString;
};

console.log(caesarCipher("hello", 3));
