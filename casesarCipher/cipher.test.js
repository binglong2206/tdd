import cipher from './cipher';

test('encrypt a word by shifting to "n" position', () => {
  expect(cipher('apple', 3)).toBe('dssoh');
});

test('encrypt a word by shifting to "n" position', () => {
  expect(cipher('crazy dog', 18)).toBe('ujsrq vgy');
});

test('encrypt a word by shifting to "n" position', () => {
  expect(cipher('JavaScript Example of the Caesar Cipher', 20)).toBe(
    'dupumwlcjn yrugjfy iz nby wuymul wcjbyl'
  );
});

test('encrypt a word by shifting to "n" position', () => {
  expect(cipher('o encipher your own messages in python', 13)).toBe(
    'b rapvcure lbhe bja zrffntrf va clguba'
  );
});
