// class InputCell {
//   constructor(initValue) {
//     this.value = null;
//     this.subscribers = new Set();
//     this.eventHistory = [];

//     this.setValue(initValue);
//   }

//   setValue(newValue, eventId = InputCell.newEventId()) {
//     if (newValue === this.value) return;
//     this.value = newValue;
//     this.eventHistory.push({
//       value: newValue,
//       eventId,
//     });
//     this.notify();
//   }

//   addSubscriber(cell) {
//     this.subscribers.add(cell);
//   }

//   notify() {
//     this.subscribers.forEach(subscriber => {
//       subscriber.
//     });
//   }

//   static newEventId() {
//     return Symbol('when event emitted');
//   }
// }

// class ComputeCell extends InputCell {
//   constructor(cells, calc) {
//     super(null);
//     this.cells = cells;
//     this.calc = calc;

//     this.setValue(this.compute());

//     this.cells.forEach((cell) => {
//       cell.addSubscriber(this.eventListener.bind(this));
//     });
//   }

//   compute() {
//     return this.calc(this.cells);
//   }

//   eventListener() {
//     this.setValue(this.compute());
//   }
// }

// class CallbackCell {
//   constructor(returnValue) {
//     this.returnValue = returnValue;
//     this.values = [];
//   }
// }

// export { InputCell, ComputeCell, CallbackCell };

const allComputeCells = [];

export class InputCell {
  constructor(v) {
    this.value = v;
    this.outputCells = [];
  }

  setValue(v) {
    this.value = v;
    this.outputCells.forEach((c) => {
      c.update();
    });
    allComputeCells.forEach((cc) => {
      cc.fireCallbacks();
    });
  }

  addOutput(cell) {
    this.outputCells.push(cell);
  }
}

export class ComputeCell {
  constructor(inputCells, f) {
    this.inputCells = inputCells;
    this.outputCells = [];
    this.callbackCells = [];
    this.f = f;
    inputCells.forEach((c) => {
      c.addOutput(this);
    });
    this.update();
    allComputeCells.push(this);
  }

  update() {
    this.value = this.f(this.inputCells);
    this.outputCells.forEach((c) => {
      c.update();
    });
  }

  fireCallbacks() {
    this.callbackCells.forEach((c) => {
      c.updateValue(this.value);
    });
  }

  addOutput(cell) {
    this.outputCells.push(cell);
  }

  addCallback(callbackCell) {
    this.callbackCells.push(callbackCell);
    callbackCell.initValue(this.value);
  }

  removeCallback(callbackCell) {
    this.callbackCells = this.callbackCells.filter(c => c !== callbackCell);
  }
}

export class CallbackCell {
  constructor(callback) {
    this.callback = callback;
    this.value = undefined;
    this.values = [];
  }

  updateValue(value) {
    if (value !== this.value) {
      this.callback(this);
      this.values.push(value);
      this.value = value;
    }
  }

  initValue(value) {
    this.value = value;
  }
}
