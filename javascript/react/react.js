export class InputCell {
  constructor(num) {
    this.num = num;
    this.value = this.num;
  }

  setValue(newNum) {
    this.value = newNum;
  }
}
export class ComputeCell {
  constructor(inputCellsInArray, func) {
    this.inputCellsInArray = inputCellsInArray;
    this.func = func;
  }

  get value() {
    return this.func(this.inputCellsInArray);
  }

  addCallback(callback) {
    [...this.value];
  }
}
export class CallbackCell {
  constructor(func) {
    this.func = func;
    for (const item of inputCellsInArray) {
      item._computeCell = this;
    }
  }

  notify() {
    this.values = this.func(this.inputCellsInArray);
  }
}

// 또는, setValue가 호출되었을 때, computeCell.value를 매번 새로 계산
// export class InputCell {
//   constructor(num) {
//     this.num = num;
//     this.value = this.num;
//   }
//   setValue(newNum) {
//     this.value = newNum;
//     if (this._computeCell && this._computeCell.notify) {
//       this._computeCell.notify();
//     }
//   }
// }

// export class ComputeCell {
//   constructor(inputCellsInArray, func) {
//     this.inputCellsInArray = inputCellsInArray;
//     this.func = func;
//     this.value = func(inputCellsInArray);

//     for (const item of inputCellsInArray) {
//       item._computeCell = this;
//     }
//   }

//   notify() {
//     this.value = this.func(this.inputCellsInArray);
//   }
// }
