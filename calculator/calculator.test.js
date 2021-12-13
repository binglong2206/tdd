import calculator from './calculator';

test('add', () => {
  expect(calculator.add(3, 5, 2)).toBe(10);
});

test('subtract', () => {
  expect(calculator.subtract(3, 5, 2)).toBe(-4);
});

test('divide', () => {
  expect(calculator.divide(8, 2)).toBe(4);
});

test('multiply', () => {
  expect(calculator.multiply(5, 3, 2)).toBe(30);
});
