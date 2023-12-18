const calculator = require("../code/calculator");

describe("add", () => {
  test("0 + 0", () => {
    expect(calculator.add(0, 0)).toEqual(0);
  });

  test("add simple number", () => {
    expect(calculator.add(1, 1)).toEqual(2);
  });

  test("negative number", () => {
    expect(calculator.add(-1, -1)).toEqual(-2);
  });
});

describe("subtract", () => {
  test("0 - 0", () => {
    expect(calculator.subtract(0, 0)).toEqual(0);
  });

  test("subtract simple number", () => {
    expect(calculator.subtract(1, 2)).toEqual(-1);
  });

  test("negative number", () => {
    expect(calculator.subtract(-2, -2)).toEqual(0);
  });
});

describe("multiply", () => {
  test("0 * 0", () => {
    expect(calculator.multiply(0, 0)).toEqual(0);
  });

  test("mutiply simple number", () => {
    expect(calculator.multiply(1, 2)).toEqual(2);
  });

  test("negative number", () => {
    expect(calculator.multiply(-4, -4)).toEqual(16);
  });

  test("large number", () => {
    expect(calculator.multiply(150, 150)).toEqual(22500);
  });
});

describe("divide", () => {
  test("0 / 0", () => {
    expect(calculator.divide(0, 0)).toEqual(NaN);
  });

  test("divide number", () => {
    expect(calculator.divide(550, 25)).toEqual(22);
  });

  test("with decimal", () => {
    expect(calculator.divide(550, 28)).toBeCloseTo(19.642857142857142);
  });
});
