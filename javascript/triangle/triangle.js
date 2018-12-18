export default class Triangle {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  kind() {
    const arr = [this.x, this.y, this.z];
    arr.sort((x, y) => y - x);
    if (arr[0] > arr[1] + arr[2] || arr[2] <= 0) {
      throw new Error("error");
    } else {
      return arr[0] === arr[2]
        ? "equilateral"
        : arr[0] === arr[1] || arr[1] === arr[2]
        ? "isosceles"
        : "scalene";
    }
  }
}
