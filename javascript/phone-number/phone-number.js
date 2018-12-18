export default class PhoneNumber {
  constructor(enteredNum) {
    this.enteredNum = enteredNum;
  }

  number() {
    const result = this.enteredNum
      .trim()
      .match(/^\+?1?\D*([2-9]\d{2})\D*([2-9]\d{2})\D*(\d{4})$/);
    return result && result[1] + result[2] + result[3];
  }
}
