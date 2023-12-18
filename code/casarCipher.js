const getshiftString = (key) => {
  let originalAlphabet = "abcdefghijklmnopqrstuvwxyz";
  let shift = "";

  key = key > 26 ? key % 26 : key;

  let newstring = originalAlphabet.slice(0, key);
  let tempString = originalAlphabet.slice(key, originalAlphabet.length);

  shift = tempString + newstring;
  return shift;
};

const caesarCipher = (someString, key) => {
  let originalAlphabet = "abcdefghijklmnopqrstuvwxyz";
  let tempArr = [];
  for (let i = 0; i < someString.length; i++) {
    for (let j = 0; j < originalAlphabet.length; j++) {
      if (someString[i] === originalAlphabet[j]) {
        tempArr.push(j);
      }
    }
  }

  const shiftString = getshiftString(key);

  let temp = "";
  for (let j = 0; j < tempArr.length; j++) {
    for (let i = 0; i < shiftString.length; i++) {
      if (tempArr[j] === i) {
        temp = temp + shiftString[i];
      }
    }
  }

  return temp;
};

console.log(caesarCipher("hello", 4));

// let shiftString = "abcdefghijklmnopqrstuvwxyz";

// for (let i = 0; i < shiftString.length; i++) {
//   if (i === 7) {
//     console.log(shiftString[i]);
//   }
// }
