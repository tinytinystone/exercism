export const primeFactors = input => {
  const result = [];
  let n = 2;
  let afterCalculate = input;
  while (n <= afterCalculate) {
    while (afterCalculate % n === 0) {
      result.push(n);
      afterCalculate = afterCalculate / n;
    }
    n += 1;
  }
  return result;
};
