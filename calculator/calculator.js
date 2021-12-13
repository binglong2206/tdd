const calculator = {
  add() {
    const parameters = Object.values(arguments);
    const ans = parameters.reduce((a, b) => a + b, 0);
    return ans;
  },

  subtract() {
    const parameters = Object.values(arguments);
    const ans = parameters.reduce((a, b) => a - b);
    return ans;
  },

  multiply() {
    const parameters = Object.values(arguments);
    const ans = parameters.reduce((a, b) => a * b, 1);
    return ans;
  },

  divide() {
    const parameters = Object.values(arguments);
    const ans = parameters.reduce((a, b) => a / b);
    return ans;
  },
};

export default calculator;
