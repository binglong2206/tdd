const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function cipher(words, n) {
  let newWord = '';
  const arrayWords = words.toLowerCase().split(' ');

  arrayWords.forEach((word) => {
    const arrayLetters = word.split('');
    arrayLetters.forEach((letter) => {
      const index = alphabet.indexOf(letter) + n;

      if (index > 25) {
        newWord += alphabet[index - 25 - 1]; // if it goes over index by 1, it should be 0. not 1
      } else {
        newWord += alphabet[index];
      }
    });

    newWord += ' ';
  });

  newWord = newWord.slice(0, newWord.length - 1);
  return newWord;
}

export default cipher;
