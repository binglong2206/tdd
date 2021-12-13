import capitalize from './capitalize';

test('capitalize 1 word', () => {
  expect(capitalize('humble')).toBe('Humble');
});

test('capitalize multiple words', () => {
  expect(capitalize('humble man wow')).toBe('Humble Man Wow');
});

test('Not capitalize a list of specified words (i.e. and)', () => {
  expect(capitalize('man is humble')).toBe('Man is Humble');
});
