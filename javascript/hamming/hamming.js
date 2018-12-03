const Hamming = function(){
}

Hamming.prototype.compute = function (str1, str2) {
  this.str1 = str1;
  this.str2 = str2;
  if (this.str1.length !== this.str2.length) {
    throw new Error("DNA strands must be of equal length.");
  }
  const sum = [...this.str1].reduce((a, value, idx) => {
    if (value !== [...this.str2][idx]) {
      return a + 1;
    }
    return a;
  }, 0);
  return sum;
}

export default Hamming