const omitWords = ['is', 'and', 'or'];

function capitalize(words) {
  let finalWord = '';
  const array = words.split(' ');

  array.forEach((word) => {
    if (omitWords.includes(word)) {
      finalWord += `${word} `;
    } else {
      const capitalized = word[0].toUpperCase() + word.slice(1);
      finalWord += `${capitalized} `;
    }
  });
  finalWord = finalWord.slice(0, finalWord.length - 1);
  return finalWord;
}

export default capitalize;
