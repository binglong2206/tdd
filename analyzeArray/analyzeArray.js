export default function analyzeArray(array) {
  let max = array[0];
  let min = array[0];
  let i = 0;
  while (i < array.length) {
    if (array[i] > max) {
      max = array[i];
    } else if (array[i] < min) {
      min = array[i];
    }
    i++;
  }

  const { length } = array;
  const average = array.reduce((a, b) => a + b) / array.length;

  return {
    average,
    min,
    max,
    length,
  };
}
