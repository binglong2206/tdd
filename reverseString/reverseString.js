export default function reverseString(words) {
  let finalWords = '';
  const arrayWords = words.split(' ').reverse();

  arrayWords.forEach((word) => {
    const arrayLetters = word.split('').reverse();

    arrayLetters.forEach((w) => {
      finalWords += w;
    });
    finalWords += ' ';
  });
  finalWords = finalWords.slice(0, finalWords.length - 1);
  return finalWords;
}
