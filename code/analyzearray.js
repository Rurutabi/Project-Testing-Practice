const getMax = (arr) => {
  return Math.max(...arr);
};

const getMin = (arr) => {
  let minValue = Math.min(...arr);
  return minValue;
};

const getAverage = (arr) => {
  const average = arr.reduce((accumulator, current) => {
    return accumulator + current;
  }, 0);

  return average / arr.length;
};

const analyzeArray = (arr) => {
  if (arr.length <= 0) {
    return {
      average: NaN,
      min: undefined,
      max: undefined,
      length: 0,
    };
  }

  const newOject = {
    average: getAverage(arr),
    min: getMin(arr),
    max: getMax(arr),
    length: arr.length,
  };

  return newOject;
};

let sampleArray = [1, 8, 3, 4, 2, 6];

const object = analyzeArray(sampleArray);

console.log(object);

module.exports = analyzeArray;
