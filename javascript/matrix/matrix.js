export class Matrix {
  constructor(input) {
    this.result = [];
    this.input = [...input.split("\n")];
    for (let num of this.input) {
      this.result.push([...num.split(" ")]);
    }
    this.rows = [];
    for (let arr of this.result) {
      const row = [];
      for (let i = 0; i < arr.length; i++) {
        row.push(parseInt(arr[i]));
      }
      this.rows.push(row);
    }
    this.columns = [];
    for (let i = 0; i < this.result.length; i++) {
      const column = [];
      for (let arr of this.result) {
        column.push(parseInt(arr[i]));
      }
      this.columns.push(column);
    }
  }
}
