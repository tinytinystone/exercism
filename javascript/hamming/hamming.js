export const compute = (str1, str2) => {
  if (str1.length !== str2.length) {
    throw new Error("left and right strands must be of equal length");
  }
  const sum = [...str1].reduce((a, value, idx) => {
    if (value !== [...str2][idx]) {
      return a + 1;
    }
    return a;
  }, 0);
  return sum;
};
