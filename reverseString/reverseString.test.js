import reverseString from './reverseString';

test('reverse one word', () => {
  expect(reverseString('LoganPaul')).toBe('luaPnagoL');
});

test('reverse a sentence', () => {
  expect(reverseString('i am a goat')).toBe('taog a ma i');
});
