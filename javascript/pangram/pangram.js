export const isPangram = sentence => {
  const result = new Set([...sentence.toLowerCase()]);
  const alphabets = [..."abcdefghijklmnopqrstuvwxyz"];
  result.forEach(item => {
    if (alphabets.includes(item)) {
      const i = alphabets.indexOf(item);
      alphabets.splice(i, 1);
    }
  });
  if (alphabets.length === 0) {
    return true;
  } else {
    return false;
  }
};
