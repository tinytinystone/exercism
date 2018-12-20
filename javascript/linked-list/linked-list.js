export default class LinkedList {
  constructor() {
    this._list = [];
  }
  push(number) {
    this._list.push(number);
  }
  pop() {
    return this._list.pop();
  }
  unshift(number) {
    this._list.unshift(number);
  }
  shift() {
    return this._list.shift();
  }
  delete(number) {
    return (this._list = this._list.filter(item => item !== number));
  }
  count() {
    return this._list.length;
  }
}
