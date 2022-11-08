const task3 = require('./task3');

test('Testing Power', () => {
  expect(task3.power(2, 2)).toBe(4);
});

test('Testing round', () => {
  expect(task3.round(2.9)).toBe(3);
});

test('Testing ceiling', () => {
  expect(task3.ceil(1.1)).toBe(2);
});
